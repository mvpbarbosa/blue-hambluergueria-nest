import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'Marcos',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'marcos@me.com',
  })
  email: string;
}
