import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TestCallDto {

  @IsString()
  @ApiProperty({example: "Anything"})
  readonly testValue: string;

}