import {IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";


export class CreateUserDto {

  @IsNotEmpty({ message: 'Email missing' })
  @IsEmail()
  email: string;
  
  @IsNotEmpty({ message: 'Password is missing' })
  @IsStrongPassword({minSymbols: 0})
  password: string;
}