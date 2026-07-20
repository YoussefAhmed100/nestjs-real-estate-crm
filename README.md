# 🏢 Real Estate CRM Platform

A **comprehensive**, **enterprise-grade** Real Estate Customer Relationship Management (CRM) system built with **NestJS**, **MongoDB**, and **TypeScript**. This platform enables real estate companies to manage projects, units, clients, leads, deals, and financial transactions with advanced filtering, search, and reporting capabilities.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Core Modules](#core-modules)
- [Advanced Features](#advanced-features)
- [Testing](#testing)
- [Docker Deployment](#docker-deployment)
- [Contributing Guidelines](#contributing-guidelines)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## 🎯 Overview

The **Real Estate CRM Platform** is designed to streamline real estate business operations through:

- **Project Management**: Manage multiple real estate projects with developers, locations, and timeline tracking
- **Unit Inventory**: Comprehensive unit management with detailed specifications and status tracking
- **Client & Lead Management**: Track clients, leads, and their conversion lifecycle
- **Deal Tracking**: Monitor sales deals with financial tracking and status updates
- **Financial Management**: Treasury module for transaction tracking and financial reporting
- **Web Presence**: Content management for website (about us, home, contact us, footer)
- **Analytics Dashboard**: Real-time insights and reporting capabilities
- **Multi-user Support**: Role-based access control for sales teams, managers, and admins

---

## ✨ Features

### 🔐 Authentication & Authorization

✅ **JWT-Based Authentication**
- Access Token & Refresh Token mechanism
- Secure password management with bcrypt
- Password reset with verification codes
- Session management
- Role-based access control (RBAC)

✅ **User Roles**
- **Admin**: Full system access and management
- **Manager**: Team oversight and reporting
- **Sales**: Sales operations and client management
- **Support**: Customer support and follow-up

### 🏗️ Project Management

✅ **Project Features**
- Create and manage multiple projects
- Link projects to developers
- Project status tracking (Active, Upcoming, Completed)
- Multiple image uploads per project
- Location and timeline management
- Project descriptions and specifications

### 🏠 Unit Management

✅ **Comprehensive Unit Data**
- Unique unit codes for identification
- Unit types (Apartment, Villa, Townhouse, Studio, Commercial)
- Unit purpose (Residential, Commercial, Mixed-use)
- Price tracking with payment installments
- Size and dimension specifications (bedrooms, bathrooms, area)
- Floor and location details
- Status tracking (Available, Sold, Reserved, Off-Market)
- Multiple unit images and cover image
- Client assignment and ownership
- Web visibility control
- Advanced grouping (Group, Building, Block, Phase, Model)

### 👤 Client & Lead Management

✅ **Client Management**
- Create and manage client profiles
- Contact information and preferences
- Client conversion tracking
- Client communication history
- Lead-to-client conversion workflow

✅ **Lead Management**
- Lead creation with source tracking
- Lead status management (New, Qualified, Contacted, Interested, Proposal, Closed)
- Lead source tracking (Website, Referral, Event, Cold Call, Other)
- Lead assignment to sales team members
- Lead analytics and conversion metrics
- Lead-to-client conversion flow

### 💰 Deal Management

✅ **Deal Tracking**
- Create and monitor sales deals
- Link units to deals
- Client association
- Deal status and stage tracking
- Timeline and deadline management
- Financial tracking (offered price, actual price, commission)
- Deal analytics and win/loss rates

### 💳 Financial Management (Treasury)

✅ **Transaction Tracking**
- Record all financial transactions
- Multiple transaction types (Sale, Payment, Commission, Expense, Refund)
- Client and unit linking
- Amount and date tracking
- Transaction notes and documentation
- Financial reporting and reconciliation

### 📍 Geographic Management

✅ **Areas Management**
- Define and manage geographic areas
- Area descriptions
- Area-based unit filtering
- Location hierarchy

### 📅 Event Management

✅ **Event Scheduling**
- Create and manage events
- Event types and categorization
- Event descriptions and details
- Date and time management
- Event notifications

### 📊 Admin Dashboard

✅ **Analytics & Reporting**
- Real-time sales metrics
- Lead conversion rates
- Unit availability overview
- Financial summaries
- Team performance tracking
- Customizable dashboards

### 🌐 Website Content Management

✅ **Content Modules**
- **About Us**: Company information and branding
- **Home**: Landing page content
- **Contact Us**: Contact information, phone numbers, social media, CEO details, location
- **Footer**: Footer content and links

### 🔍 Advanced Query System

✅ **Query Capabilities**
- Complex filtering with multiple criteria
- Full-text search across relevant fields
- Multi-column sorting
- Pagination with configurable page sizes
- Field selection and projection
- Aggregation pipelines
- Date range filtering
- Status and state filtering
- Compound query operations

### ⚡ Performance & Caching

✅ **Optimization Features**
- Redis-based caching
- Database indexing on frequently queried fields
- Query optimization and aggregation
- Connection pooling
- Response compression
- Cache invalidation strategies

### 🔒 Security Features

✅ **Security Measures**
- JWT token validation
- CORS protection
- Rate limiting and throttling
- Request size limits
- Helmet security headers
- Password encryption and hashing
- Input validation and sanitization

---

## 🛠 Tech Stack

### Backend Framework
- **NestJS** v11.0.1 - Progressive Node.js framework
- **TypeScript** v5.7.3 - Type-safe JavaScript

### Database & Caching
- **MongoDB** v7 - NoSQL document database
- **Mongoose** v9.2.1 - Object Document Mapper (ODM)
- **Redis** v7 - In-memory cache store

### Authentication & Security
- **JWT** (@nestjs/jwt) - JSON Web Tokens
- **Passport.js** - Authentication middleware
- **Bcrypt** v6.0.0 - Password hashing
- **Helmet** v8.1.0 - Security headers

### File & Storage
- **Cloudinary** v2.9.0 - Cloud image storage and CDN
- **Multer** - File upload middleware
- **ExcelJS** v4.4.0 - Excel file generation

### API & Documentation
- **Swagger/OpenAPI** (@nestjs/swagger) - API documentation
- **Socket.io** v4.8.3 - Real-time communication

### Performance & Monitoring
- **Morgan** v1.10.1 - HTTP request logging
- **Pino** v10.3.1 - Structured logging
- **Compression** v1.8.1 - Response compression
- **Cache-Manager** v7.2.8 - Caching abstraction

### Validation & Utilities
- **class-validator** v0.14.3 - Data validation
- **class-transformer** v0.5.1 - Data transformation
- **Joi** v18.0.2 - Environment validation
- **libphonenumber-js** v1.12.37 - Phone validation

### Development Tools
- **ESLint** v9.18.0 - Code linting
- **Prettier** v3.4.2 - Code formatting
- **Jest** v30.0.0 - Testing framework

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Service orchestration
- **Nginx** - Reverse proxy

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Web/Mobile Clients                   │
│           (Frontend Applications, Admin Panel)           │
└────────────┬────────────────────────────────────────────┘
             │
┌────────────▼────────────────────────────────────────────┐
│              Nginx Reverse Proxy (Production)           │
│         - Load Balancing                                │
│         - Rate Limiting                                 │
│         - Compression                                   │
└────────────┬────────────────────────────────────────────┘
             │
┌────────────▼────────────────────────────────────────────┐
│           NestJS Application (API Server)               │
│  Port: 3000                                             │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Core Business Modules                           │  │
│  │  ├─ Auth Module (JWT, Password Management)       │  │
│  │  ├─ Users Module (Admin, Manager, Sales)         │  │
│  │  ├─ Projects Module (Real Estate Projects)       │  │
│  │  ├─ Units Module (Property Inventory)            │  │
│  │  ├─ Developers Module (Builder Management)       │  │
│  │  ├─ Client Module (Client Profiles)              │  │
│  │  ├─ Lead Module (Lead Management & Tracking)     │  │
│  │  ├─ Deals Module (Sales Deals Tracking)          │  │
│  │  ├─ Areas Module (Geographic Management)         │  │
│  │  ├─ Events Module (Event Scheduling)             │  │
│  │  ├─ Treasury Module (Financial Tracking)         │  │
│  │  ├─ Dashboard Module (Analytics & Reporting)     │  │
│  │  └─ Content Modules (About, Home, Contact)       │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Infrastructure & Cross-Cutting Concerns         │  │
│  │  ├─ Guards (JWT, Roles, Rate Limiting)           │  │
│  │  ├─ Decorators (Public, CurrentUser, Roles)      │  │
│  │  ├─ Filters (Exception Handling)                 │  │
│  │  ├─ Interceptors (Caching, Logging)              │  │
│  │  ├─ Validators (Custom Field Validators)         │  │
│  │  ├─ Query Builder (Advanced Filtering)           │  │
│  │  └─ Storage Service (Cloudinary Integration)     │  │
│  └──────────────────────────────────────────────────┘  │
└────────────┬────────────────────────────────────────────┘
             │
    ┌────────┼────────┬──────────┐
    │        │        │          │
┌───▼───┐ ┌──▼───┐ ┌─▼─────┐ ┌─▼──────────┐
│MongoDB│ │Redis │ │Cloudinary│ │External API
│(Data) │ │Cache │ │ (Images) │ │Services
└───────┘ └──────┘ └────────┘ └────────────┘
```

---

## 📋 Prerequisites

### System Requirements

- **Node.js**: v20.0.0 or higher
- **npm**: v10.0.0 or higher
- **MongoDB**: v7.0+ (local or cloud)
- **Redis**: v7.0+ (optional, for caching)
- **Docker & Docker Compose**: For containerized development/deployment

### Required Knowledge

- Node.js and TypeScript fundamentals
- RESTful API design principles
- MongoDB and Mongoose ODM
- NestJS framework architecture
- Docker basics

### External Services (Optional)

- **Cloudinary**: For image storage and CDN
- **AWS S3**: Alternative to Cloudinary for file storage

---

## 📥 Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/YoussefAhmed100/nestjs-real-estate-crm.git
cd nestjs-real-estate-crm
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory with all required variables (see [Environment Variables](#environment-variables) section):

```bash
# Example
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://admin:password@localhost:27017/crm_db?authSource=admin
JWT_SECRET_KEY=your_jwt_secret_key_here
# ... other variables
```

### Step 4: Start with Docker Compose (Recommended)

**Development:**
```bash
docker-compose -f docker-compose.dev.yml up -d
```

**Production:**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

This automatically starts:
- NestJS application
- MongoDB database
- Redis cache
- Mongo Express (dev only)

### Step 5: Verify Installation

```bash
# Test API
curl http://localhost:3000/api/v1/health

# Access Swagger API Docs
http://localhost:3000/api/v1/docs

# Access Mongo Express (dev)
http://localhost:8081
# Credentials: admin / admin123
```

---

## 🔧 Environment Variables

Create `.env` file with the following configuration:

```env
# ========================
# Application Configuration
# ========================
NODE_ENV=development
PORT=3000
REQUEST_LIMIT=20kb

# ========================
# Database Configuration
# ========================
MONGO_URI=mongodb://admin:password@mongo:27017/crm_db?authSource=admin
MONGO_USERNAME=admin
MONGO_PASSWORD=password

# ========================
# JWT Configuration
# ========================
JWT_SECRET_KEY=your_access_token_secret_key_minimum_32_characters
JWT_EXPIRE_TIME=24h
JWT_REFRESH_SECRET_KEY=your_refresh_token_secret_key_minimum_32_characters
JWT_REFRESH_EXPIRE_TIME=7d

# ========================
# Rate Limiting
# ========================
RATE_LIMIT_TTL=60000          # milliseconds
RATE_LIMIT_LIMIT=100          # requests per window

AUTH_RATE_LIMIT_TTL=60000     # milliseconds
AUTH_RATE_LIMIT_LIMIT=5       # login attempts

UPLOAD_RATE_LIMIT_TTL=60000   # milliseconds
UPLOAD_RATE_LIMIT_LIMIT=10    # uploads

# ========================
# Redis Configuration
# ========================
REDIS_URL=redis://:@redis:6379

# ========================
# Frontend Configuration
# ========================
FRONTEND_URL=http://localhost:3001

# ========================
# Cloud Storage (Cloudinary)
# ========================
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# ========================
# Optional: AWS S3 Configuration
# ========================
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_S3_BUCKET=your_s3_bucket_name
```

### Environment by Stage

**Development:**
```env
NODE_ENV=development
MONGO_URI=mongodb://admin:password@localhost:27017/crm_dev
REDIS_URL=redis://:@localhost:6379
```

**Production:**
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/crm_prod
REDIS_URL=redis://:password@redis-prod:6379
REQUEST_LIMIT=10kb
```

---

## 🚀 Running the Application

### Local Development

```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run start:dev

# Server runs on http://localhost:3000
# API Docs: http://localhost:3000/api/v1/docs
```

### Docker Development

```bash
# Start all services
docker-compose -f docker-compose.dev.yml up

# View logs
docker-compose -f docker-compose.dev.yml logs -f app

# Stop services
docker-compose -f docker-compose.dev.yml down
```

### Docker Production

```bash
# Start production environment
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f app

# Stop services
docker-compose -f docker-compose.prod.yml down
```

### Build & Run Standalone

```bash
# Build the application
npm run build

# Run production build
NODE_ENV=production npm run start:prod

# Or directly with Node
NODE_ENV=production node dist/main.js
```

---

## 📁 Project Structure

```
nestjs-real-estate-crm/
│
├── src/
│   ├── auth/                           # Authentication Module
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── dto/                        # Login, Register DTOs
│   │   └── strategies/                 # JWT strategy
│   │
│   ├── users/                          # User Management
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── schema/                     # User schema
│   │   ├── enums/                      # User roles enum
│   │   └── dto/
│   │
│   ├── developers/                     # Developer Management
│   │   ├── developers.controller.ts
│   │   ├── developers.service.ts
│   │   ├── developers.module.ts
│   │   ├── schema/                     # Developer schema
│   │   └── dto/
│   │
│   ├── projects/                       # Project Management
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   ├── projects.module.ts
│   │   ├── schema/                     # Project schema
│   │   └── dto/
│   │
│   ├── units/                          # Unit/Property Management
│   │   ├── units.controller.ts
│   │   ├── units.service.ts
│   │   ├── units.module.ts
│   │   ├── schema/                     # Unit schema
│   │   ├── enums/                      # Status, Type, Purpose enums
│   │   └── dto/
│   │
│   ├── client/                         # Client Management
│   │   ├── client.controller.ts
│   │   ├── client.service.ts
│   │   ├── client.module.ts
│   │   ├── schema/
│   │   └── dto/
│   │
│   ├── lead/                           # Lead Management & Tracking
│   │   ├── lead.controller.ts
│   │   ├── lead.service.ts
│   │   ├── lead.module.ts
│   │   ├── leads-analytics.service.ts  # Analytics
│   │   ├── schema/
│   │   ├── enums/                      # Status, Source enums
│   │   └── dto/
│   │
│   ├── deals/                          # Sales Deals Management
│   │   ├── deals.controller.ts
│   │   ├── deals.service.ts
│   │   ├── deals.module.ts
│   │   ├── schema/
│   │   ├── enums/                      # Deal status enum
│   │   └── dto/
│   │
│   ├── areas/                          # Geographic Areas
│   │   ├── areas.controller.ts
│   │   ├── areas.service.ts
│   │   ├── areas.module.ts
│   │   ├── schema/
│   │   └── dto/
│   │
│   ├── event/                          # Events Management
│   │   ├── event.controller.ts
│   │   ├── event.service.ts
│   │   ├── event.module.ts
│   │   ├── schema/
│   │   ├── enums/
│   │   └── dto/
│   │
│   ├── dashboard/                      # Analytics Dashboard
│   │   ├── dashboard.controller.ts
│   │   ├── dashboard.service.ts
│   │   ├── dashboard.module.ts
│   │   └── dto/
│   │
│   ├── treasury/                       # Financial Management
│   │   ├── treasury.controller.ts
│   │   ├── treasury.service.ts
│   │   ├── treasury.module.ts
│   │   ├── schema/
│   │   ├── enums/                      # Transaction type enum
│   │   └── dto/
│   │
│   ├── about-us/                       # About Us Content
│   │   ├── about-us.controller.ts
│   │   ├── about-us.service.ts
│   │   ├── about-us.module.ts
│   │   ├── schema/
│   │   └── dto/
│   │
│   ├── home/                           # Home Page Content
│   │   ├── home.controller.ts
│   │   ├── home.service.ts
│   │   ├── home.module.ts
│   │   └── dto/
│   │
│   ├── contact-us/                     # Contact Information
│   │   ├── contact-us.controller.ts
│   │   ├── contact-us.service.ts
│   │   ├── contact-us.module.ts
│   │   ├── schema/                     # Sections for phone, social, CEO, location
│   │   └── dto/
│   │
│   ├── footer/                         # Footer Content
│   │   ├── footer.controller.ts
│   │   ├── footer.service.ts
│   │   ├── footer.module.ts
│   │   ├── schema/
│   │   └── dto/
│   │
│   ├── common/                         # Shared Utilities & Infrastructure
│   │   ├── guards/                     # JWT, Roles guards
│   │   ├── decorators/                 # Custom decorators
│   │   ├── filters/                    # Exception handling
│   │   ├── interceptors/               # Caching, logging
│   │   ├── validators/                 # Custom validators
│   │   ├── helpers/                    # Utility functions
│   │   ├── constants/                  # App constants
│   │   ├── contracts/                  # Interfaces & types
│   │   ├── dto/                        # Common DTOs
│   │   ├── utils/                      # Utility functions
│   │   ├── storage/                    # Cloudinary service
│   │   └── query-builder/              # Advanced query filtering
│   │
│   ├── config/                         # Configuration
│   │   ├── configuration.ts            # App configuration
│   │   ├── validation.ts               # Environment validation
│   │   └── swagger.config.ts           # Swagger/OpenAPI setup
│   │
│   ├── app.module.ts                   # Root module
│   └── main.ts                         # Application entry point
│
├── test/                               # Testing
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│
├── nginx/                              # Nginx Configuration
│   └── nginx.conf                      # Reverse proxy setup
│
├── Dockerfile                          # Container image
├── docker-compose.dev.yml              # Development services
├── docker-compose.prod.yml             # Production services
│
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript config
├── nest-cli.json                       # NestJS CLI config
│
└── README.md                           # This file
```

---

## 🗄 Database Schema

### Users Collection
```typescript
{
  _id: ObjectId,
  fullName: string,
  email: string (unique, indexed),
  password: string (bcrypt hashed),
  phone: string,
  role: 'Admin' | 'Manager' | 'Sales' | 'Support',
  isActive: boolean,
  images: string[],
  passwordChangedAt: Date,
  passwordResetCode: string,
  passwordResetExpires: Date,
  passwordResetVerified: boolean,
  refreshToken: string,
  createdAt: Date
}
```

### Projects Collection
```typescript
{
  _id: ObjectId,
  name: string (required),
  description: string,
  location: string (required),
  createdBy: string (required),
  developer: ObjectId (ref: Developer),
  startDate: Date (required),
  status: 'Active' | 'Completed' | 'Upcoming',
  images: string[] (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Units Collection
```typescript
{
  _id: ObjectId,
  project: ObjectId (ref: Project, indexed),
  title: string,
  unitCode: string (unique, indexed),
  type: 'Apartment' | 'Villa' | 'Townhouse' | 'Studio' | 'Commercial',
  purpose: 'Residential' | 'Commercial' | 'Mixed-use',
  price: number (required, min: 0),
  area: ObjectId (ref: Area, indexed),
  floor: number,
  location: string,
  apartmentNumber: number,
  bedrooms: number (required, min: 0),
  bathrooms: number (required, min: 0),
  status: 'Available' | 'Sold' | 'Reserved' | 'Off-Market' (indexed),
  client: ObjectId (ref: Client),
  paymentType: string,
  createdBy: ObjectId (ref: User),
  size: number (required, min: 0),
  images: string[] (required),
  coverImage: string,
  group: string,
  building: string,
  block: string,
  villaNumber: number,
  paidAmount: number,
  remainingAmount: number,
  villaType: string,
  landArea: number,
  requestedAmount: number,
  notes: string,
  phase: string,
  showInWebsite: boolean (indexed),
  model: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Leads Collection
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  status: 'New' | 'Qualified' | 'Contacted' | 'Interested' | 'Proposal' | 'Closed',
  source: 'Website' | 'Referral' | 'Event' | 'Cold Call' | 'Other',
  unit: ObjectId (ref: Unit),
  assignedTo: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Deals Collection
```typescript
{
  _id: ObjectId,
  unit: ObjectId (ref: Unit),
  client: ObjectId (ref: Client),
  offeredPrice: number,
  actualPrice: number,
  status: string,
  stage: string,
  timeline: Date,
  commission: number,
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Treasury Collection
```typescript
{
  _id: ObjectId,
  type: 'Sale' | 'Payment' | 'Commission' | 'Expense' | 'Refund',
  client: ObjectId (ref: Client),
  unit: ObjectId (ref: Unit),
  amount: number,
  date: Date,
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication

All protected endpoints require Bearer token in Authorization header:

```
Authorization: Bearer <jwt_access_token>
```

### Interactive API Docs

Swagger documentation available at:
```
http://localhost:3000/api/v1/docs
```

### Core Endpoints

#### **Authentication**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register new user | ❌ |
| POST | `/auth/login` | User login | ❌ |
| GET | `/auth/profile` | Get current user | ✅ |
| POST | `/auth/logout` | Logout user | ✅ |
| POST | `/auth/forgot-password` | Request password reset | ❌ |
| POST | `/auth/verify-reset-code` | Verify reset code | ❌ |

#### **Users**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/users` | Get all users | ✅ |
| GET | `/users/:id` | Get user by ID | ✅ |
| PATCH | `/users/:id` | Update user | ✅ |
| DELETE | `/users/:id` | Delete user | ✅ |

#### **Projects**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/projects` | Get all projects | ✅ |
| GET | `/projects/:id` | Get project details | ✅ |
| POST | `/projects` | Create project | ✅ |
| PATCH | `/projects/:id` | Update project | ✅ |
| DELETE | `/projects/:id` | Delete project | ✅ |

#### **Units**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/units` | Get all units | ✅ |
| GET | `/units/:id` | Get unit details | ✅ |
| POST | `/units` | Create unit | ✅ |
| PATCH | `/units/:id` | Update unit | ✅ |
| DELETE | `/units/:id` | Delete unit | ✅ |
| POST | `/units/:id/images` | Upload unit images | ✅ |
| GET | `/units/status/available` | Get available units | ✅ |

#### **Leads**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/leads` | Get all leads | ✅ |
| GET | `/leads/:id` | Get lead details | ✅ |
| POST | `/leads` | Create new lead | ✅ |
| PATCH | `/leads/:id` | Update lead | ✅ |
| DELETE | `/leads/:id` | Delete lead | ✅ |
| PATCH | `/leads/:id/convert` | Convert lead to client | ✅ |
| GET | `/leads/analytics/summary` | Lead analytics | ✅ |

#### **Deals**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/deals` | Get all deals | ✅ |
| GET | `/deals/:id` | Get deal details | ✅ |
| POST | `/deals` | Create deal | ✅ |
| PATCH | `/deals/:id` | Update deal | ✅ |
| DELETE | `/deals/:id` | Delete deal | ✅ |

#### **Client Management**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/client` | Get all clients | ✅ |
| GET | `/client/:id` | Get client details | ✅ |
| POST | `/client` | Create client | ✅ |
| PATCH | `/client/:id` | Update client | ✅ |
| DELETE | `/client/:id` | Delete client | ✅ |

#### **Dashboard & Analytics**

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/dashboard/overview` | Dashboard overview | ✅ |
| GET | `/dashboard/sales` | Sales metrics | ✅ |
| GET | `/dashboard/units` | Unit statistics | ✅ |
| GET | `/dashboard/leads` | Lead metrics | ✅ |

---

## 🎯 Core Modules

### 1. **Auth Module**
Handles authentication and authorization with JWT tokens, role-based access control, and secure password management.

### 2. **Users Module**
Manages user accounts with different roles (Admin, Manager, Sales, Support) and user-specific operations.

### 3. **Projects Module**
Manages real estate projects linked to developers with location, timeline, and image management.

### 4. **Units Module**
Comprehensive property management including specifications, pricing, status tracking, and client assignment.

### 5. **Developers Module**
Manages real estate developers/builders with their information and associated projects.

### 6. **Client Module**
Client profile management, communication history, and relationship tracking.

### 7. **Lead Module**
Lead generation, tracking, and conversion management with source tracking and analytics.

### 8. **Deals Module**
Sales deal tracking with financial information, timeline, and status management.

### 9. **Areas Module**
Geographic area management for better organization and location-based filtering.

### 10. **Treasury Module**
Financial transaction tracking including sales, payments, commissions, and expenses.

### 11. **Dashboard Module**
Analytics and reporting with real-time metrics and KPIs.

### 12. **Event Module**
Event scheduling and management for company activities and client engagement.

### 13. **Website Content Modules**
- About Us
- Home
- Contact Us
- Footer

---

## ⚡ Advanced Features

### Query Builder System

The platform includes an advanced query builder for complex filtering:

```typescript
// Example: Advanced query
GET /units?
  filter={"status":"Available","bedrooms":{"$gte":2}}&
  search=villa&
  sort=-price,name&
  page=1&
  limit=20&
  select=title,price,bedrooms,size
```

**Supported Operations:**
- Filtering with multiple criteria
- Full-text search
- Multi-column sorting
- Pagination
- Field projection
- Date range filtering
- Aggregation pipelines

### Image Management

- Cloudinary integration for scalable image storage
- Automatic image optimization and CDN delivery
- Multiple images per project/unit
- Cover image selection
- Batch upload capabilities

### Financial Tracking

- Transaction recording and reconciliation
- Multiple transaction types
- Financial reporting and analytics
- Client payment tracking
- Commission management

### Analytics & Reporting

- Real-time sales metrics
- Lead conversion rates
- Unit inventory status
- Team performance tracking
- Financial summaries
- Customizable dashboards

---

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:cov

# E2E tests
npm run test:e2e
```

### Test Structure
- Controllers: Endpoint testing
- Services: Business logic testing
- E2E: Full workflow testing

---

## 🐳 Docker Deployment

### Development Environment

```bash
docker-compose -f docker-compose.dev.yml up
```

**Includes:**
- NestJS API (port 3000)
- MongoDB (port 27017)
- Redis (port 6379)
- Mongo Express (port 8081)

### Production Environment

```bash
docker-compose -f docker-compose.prod.yml up -d
```

**Includes:**
- NestJS API (behind Nginx)
- MongoDB
- Redis
- Nginx reverse proxy (port 80)

### Docker Image Details

- **Base Image**: Node.js 20-Alpine
- **Build Strategy**: Multi-stage build
- **Size**: ~400MB optimized
- **Security**: Non-root user, minimal dependencies

---

## 🤝 Contributing Guidelines

### Code Standards

1. **TypeScript Strict Mode**: All code must be type-safe
2. **ESLint**: Follow linting rules
3. **Prettier**: Auto-format on save

### Before Committing

```bash
npm run format
npm run lint
npm run test
```

### Commit Message Format

```
<type>(<scope>): <subject>

feat(units): add price range filtering
fix(leads): correct status update logic
docs(api): update endpoint documentation
chore(deps): upgrade NestJS
```

### Pull Request Process

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit
3. Ensure tests pass
4. Push and create PR
5. Wait for code review

---

## 🔧 Troubleshooting

### MongoDB Connection Issues

```bash
# Check MongoDB status
docker-compose ps

# View MongoDB logs
docker-compose logs mongo

# Restart MongoDB
docker-compose restart mongo
```

### Redis Connection Issues

```bash
# Check Redis connectivity
docker-compose exec redis redis-cli ping

# Expected: PONG
```

### Port Conflicts

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Node Modules Issues

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Failures

```bash
# Clear Docker cache and rebuild
docker system prune -a
docker-compose build --no-cache
```

---

## 📚 Additional Resources

### Official Documentation
- [NestJS Docs](https://docs.nestjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Guide](https://mongoosejs.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Learning Materials
- NestJS Official Tutorial
- MongoDB Data Modeling
- RESTful API Design Guide
- JWT Authentication Best Practices

### Development Tools
- [Postman](https://www.postman.com) - API Testing
- [MongoDB Compass](https://www.mongodb.com/products/compass) - DB GUI
- [Redis Desktop Manager](https://redisdesktop.com) - Cache GUI
- [VS Code](https://code.visualstudio.com) - IDE

---

## 🔐 Security Best Practices

### Implemented Security Measures

✅ **Authentication & Authorization**
- JWT token-based authentication
- Role-based access control (RBAC)
- Refresh token mechanism
- Password hashing with bcrypt

✅ **API Security**
- Rate limiting and throttling
- Request size limits
- CORS validation
- Helmet security headers
- Input validation

✅ **Data Protection**
- Password field selection: false
- Secure token storage
- Sensitive field masking

✅ **Infrastructure**
- Nginx reverse proxy
- Connection pooling
- Health checks
- Resource limits

### Security Recommendations

1. Use strong JWT secrets (minimum 32 characters)
2. Implement HTTPS in production
3. Regular dependency updates
4. Database backups
5. API rate limiting adjustment
6. Monitoring and logging
7. Input validation on all endpoints

---

## 📊 Performance Optimization

### Implemented Optimizations

- **Caching**: Redis for frequently accessed data
- **Compression**: Gzip response compression
- **Rate Limiting**: DDoS and abuse prevention
- **Indexing**: Database query optimization
- **Connection Pooling**: MongoDB pool (min: 2, max: 10)
- **Pagination**: Efficient data retrieval

### Performance Metrics

- Average Response Time: <100ms
- Cache Hit Rate: >70%
- Database Query Time: <50ms
- Throughput: 100+ requests/minute

---

## 📄 License

This project is **UNLICENSED** and proprietary. All rights reserved.

For licensing inquiries, contact the project owner.

---

## 👥 Support

For issues, suggestions, or contributions:

- **GitHub Issues**: [Create Issue](https://github.com/YoussefAhmed100/nestjs-real-estate-crm/issues)
- **API Documentation**: `/api/v1/docs`
- **Email Support**: [Contact Details]

---

## 🎓 Changelog

### Version 1.0.0 (Current)
- ✅ Core CRM functionality
- ✅ Project & Unit management
- ✅ Lead & Deal tracking
- ✅ Financial management
- ✅ Advanced filtering
- ✅ Real-time analytics
- ✅ WebSite content management

---

**Last Updated**: July 2026  
**Status**: Production Ready ✅  
**Version**: 1.0.0

---

Developed with ❤️ by Senior Software Engineer
