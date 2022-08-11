import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SettingsDto {
  @IsInt()
  @ApiProperty({example: 8000})
  readonly port: number;

  @IsString()
  @ApiProperty({example: "AAAAAAAAA"})
  readonly key: string;

  @IsString()
  @ApiProperty({example: "10.0.1.2"})
  readonly endpoint: string;

}