import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  _id: false,
})
export class CeoInfo{

  @Prop({
    type: String,
    trim: true,
   required: true,
  })
    name: string;

  @Prop({
    type: String,
    trim: true,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    trim: true,
    required: true,
  })
  jopTitle: string;

    @Prop({
    trim: true,
    type: String,
   
  })
  whatsappNumber: string;

  @Prop({
    type: String,
  })
  shortBio: string;
}