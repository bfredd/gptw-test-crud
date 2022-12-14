import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
    
    @IsNotEmpty()
    @ApiProperty()
    name: String;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: String;

}