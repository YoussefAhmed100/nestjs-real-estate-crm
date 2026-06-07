import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  HydratedDocument } from 'mongoose';
import { SocialMedia } from './sections/social-media.schema';
import { PhoneNumber } from './sections/phone-number.schema';
import { CeoInfo } from './sections/ceo.schema';
import { Location } from './sections/location.schema';

export type ContactDocument = HydratedDocument<Contact>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Contact {
    
   @Prop({
    type: PhoneNumber,
      
  })
  phone: PhoneNumber;

  @Prop({
    required: true,
    trim: true,
    lowercase: true,
  })
  email: string;

  @Prop({
    required: true,
    trim: true,
  })
  whatsapp: string;

 

  @Prop({
    trim: true,
    default: 'Saturday - Thursday',
  })
  workingDays: string;

  @Prop({
    trim: true,
    default: '11:00 AM - 7:00 PM',
  })
  workingHours: string;

  @Prop({
    trim: true,
    default: 'Closed',
  })
  fridayStatus: string;

    @Prop({
    trim: true,
    type: SocialMedia,
      
  })
  socialMedia: SocialMedia;
 @Prop({
    type: CeoInfo,
 })
  ceoInfo:CeoInfo

  @Prop({
    type: Location,
  })
  location: Location;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);