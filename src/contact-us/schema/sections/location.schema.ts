import { Prop, Schema } from "@nestjs/mongoose";

@Schema({
    _id: false,
})
export class Location {
    @Prop({
        type: String,
        trim: true,
    })
    address: string;

    @Prop({
        type: String,
        trim: true,
    })
    googleMapsUrl: string;
}   