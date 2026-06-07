import { Document, Query, Types } from 'mongoose';
import { IPaginationResult } from '../contracts/pagination.interfaces';
import { IQueryBuilder } from '../contracts/query-builder.interface';


export class ApiFeatures<T> implements IQueryBuilder<T> {
  private mongooseQuery: Query<T[], T>;
  private queryString: Record<string, any>;
  public paginationResult?: IPaginationResult;

  constructor(
    mongooseQuery: Query<T[], T>,
    queryString: Record<string, any>,
  ) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }


filter(): this {
  const excluded = ['page', 'sort', 'limit', 'fields', 'keyword'];

  const objectIdFields = ['area', 'project', 'client', 'unit', 'salesAgent', 'assignedTo'];

  const queryObj = Object.keys(this.queryString)
    .filter((key) => !excluded.includes(key))
    .reduce((acc, key) => {
      const value = this.queryString[key];

      if (
        value === undefined ||
        value === null ||
        value === '' ||
        typeof value === 'object'
      ) {
        return acc;
      }

      acc[key] = value;
      return acc;
    }, {} as Record<string, any>);

  const mongoFilter: any = {};

  Object.keys(queryObj).forEach((key) => {
    const match = key.match(/^(.+)\[(gte|gt|lte|lt|in)\]$/);

    // ================= OPERATORS =================
    if (match) {
      const field = match[1];
      const operator = `$${match[2]}`;
      const rawValue = queryObj[key];

      if (!mongoFilter[field]) mongoFilter[field] = {};

      // -------- numeric operators --------
      if (['gte', 'gt', 'lte', 'lt'].includes(match[2])) {
        const num = Number(rawValue);

        if (!isNaN(num)) {
          mongoFilter[field][operator] = num;
        }
        return;
      }

      // -------- IN operator --------
      if (match[2] === 'in' && typeof rawValue === 'string') {
        const values = rawValue
          .split(',')
          .map((v: string) => v.trim())
          .filter(Boolean);

        mongoFilter[field][operator] = objectIdFields.includes(field)
          ? values.map((v) => new Types.ObjectId(v))
          : values;

        return;
      }

      return;
    }

    // ================= NORMAL FILTER =================

    // Boolean handling
    if (queryObj[key] === 'true') {
      mongoFilter[key] = true;
      return;
    }

    if (queryObj[key] === 'false') {
      mongoFilter[key] = false;
      return;
    }

    // Number handling (for numeric fields)
    const numericValue = Number(queryObj[key]);
    const isNumeric = !isNaN(numericValue) && queryObj[key] !== '';

    // ObjectId handling
    if (objectIdFields.includes(key)) {
      try {
        mongoFilter[key] = new Types.ObjectId(queryObj[key]);
      } catch {
        // ignore invalid ObjectId
      }
      return;
    }

    // Number fallback
    if (isNumeric && ['price', 'size', 'bedrooms', 'bathrooms', 'floor'].includes(key)) {
      mongoFilter[key] = numericValue;
      return;
    }

    // Default string filter
    mongoFilter[key] = queryObj[key];
  });

  this.mongooseQuery = this.mongooseQuery.find(mongoFilter);

  return this;
}




  sort(): this {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort('-createdAt');
    }
    return this;
  }

  limitFields(): this {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select('-__v');
    }
    return this;
  }

  search(searchFields: string[] = []): this {
    if (this.queryString.keyword && searchFields.length) {
      const keyword = this.queryString.keyword;
      const query = {
        $or: searchFields.map((field) => ({
          [field]: { $regex: keyword, $options: 'i' },
        })),
      };

      this.mongooseQuery = this.mongooseQuery.find(query);
    }

    return this;
  }

  paginate(totalDocuments: number): this {
    const page = parseInt(this.queryString.page) || 1;
    const limit = parseInt(this.queryString.limit) || 10;
    const skip = (page - 1) * limit;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    this.paginationResult = {
      currentPage: page,
      limit,
      numberOfPages: Math.ceil(totalDocuments / limit),
    };

    return this;
  }
  async count(): Promise<number> {
   const clonedQuery = this.mongooseQuery.clone();
  return clonedQuery.countDocuments();
}

  async exec(): Promise<T[]> {
    return this.mongooseQuery.exec();
  }
}