import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { IsInternationalPhoneNumber } from 'src/common/validators/is-phone.validator';

export class CreateCeoInfoDto {
  @ApiProperty({
    example: 'Ahmed Ali',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'ceo@company.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Chief Executive Officer',
  })
  @IsString()
  jopTitle: string;

  @ApiProperty({
    example: '+201234567890',
  })
  @IsString()
  @IsInternationalPhoneNumber()
  whatsappNumber: string;

  @ApiProperty({
    example: 'Experienced leader with 20+ years in real estate industry',
    required: false,
  })
  @IsOptional()
  @IsString()
  shortBio?: string;
}