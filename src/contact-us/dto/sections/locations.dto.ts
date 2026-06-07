import { ApiProperty } from '@nestjs/swagger';
import {  IsString } from 'class-validator';

export class LocationDto {
  @ApiProperty({
    example: 'New Cairo, Egypt',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: 'https://maps.google.com/?q=30.0444,31.2357',
  
  })
  @IsString()
  googleMapsUrl: string;
}