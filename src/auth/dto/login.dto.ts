import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto {
    
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    user: String;

    @IsNotEmpty()
    @ApiProperty()
    password: String;
}