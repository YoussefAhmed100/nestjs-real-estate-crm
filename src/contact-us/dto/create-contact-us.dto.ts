import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsInternationalPhoneNumber } from 'src/common/validators/is-phone.validator';
import { CreateSocialMediaDto } from './sections/create-social-media.dto';
import { CreatePhoneNumberDto } from './sections/create-phoneNumber.dto';
import { CreateCeoInfoDto } from './sections/ceo.dto';
import { LocationDto } from './sections/locations.dto';

export class CreateContactUsDto {
  @ApiProperty({ type: CreatePhoneNumberDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePhoneNumberDto)
  phone: CreatePhoneNumberDto;

  @ApiProperty({
    example: 'contact@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '+20 100 123 4567',
  })
  @IsString()
  @IsNotEmpty()
  @IsInternationalPhoneNumber({
    message: 'Invalid whatsapp number',
  })
  whatsapp: string;

  @ApiProperty({
    example: 'Cairo, Egypt - Nasr City',
  })


  @ApiProperty({
    example: 'Saturday - Thursday',
  })
  @IsString()
  @IsNotEmpty()
  workingDays: string;

  @ApiProperty({
    example: '11:00 AM - 7:00 PM',
  })
  @IsString()
  @IsNotEmpty()
  workingHours: string;

  @ApiProperty({
    example: 'Closed',
  })
  @IsString()
  @IsOptional()
  fridayStatus?: string;

  @ApiProperty({ type: CreateSocialMediaDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateSocialMediaDto)
  socialMedia: CreateSocialMediaDto;

  @ApiProperty({ type: CreateCeoInfoDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateCeoInfoDto)
  ceoInfo: CreateCeoInfoDto;

  @ApiProperty({ type: LocationDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;
}