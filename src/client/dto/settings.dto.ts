import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SettingsDto {
  @IsInt()
  @ApiProperty({example: 3000})
  readonly port: number;

  @IsString()
  @ApiProperty({example: "AAAAAAAAA"})
  readonly key: string;

  @IsString()
  @ApiProperty({example: "http://192.168.2.226"})
  readonly endpoint: string;

}