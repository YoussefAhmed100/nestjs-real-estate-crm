import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AreaDocument = HydratedDocument<Area>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Area {
  @Prop({
    required: true,
    trim: true,
    slug: 'name',
  })
  name: string; // B1, B2, B7

  @Prop({
    type: Types.ObjectId,
    ref: 'Project',
    required: true,
  })
  project: Types.ObjectId;

  @Prop({
    trim: true,
    type: String,
  })
  description?: string;

  @Prop({ required: true, trim: true, lowercase: true })
  location: string;
  @Prop({ type: String, trim: true })
   createdBy: string;


 @Prop({ default:true})
  isActive?: boolean;



}

export const AreaSchema = SchemaFactory.createForClass(Area);
AreaSchema.index({ name: 1, project: 1 });
