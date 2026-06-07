import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MissionVisionSectionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mission: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  vision: string;
}