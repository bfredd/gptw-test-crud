import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from 'src//helpers/messages.helper';
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
    
    @IsNotEmpty()
    @ApiProperty()
    name: String;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: String;

    @IsNotEmpty()
    @ApiProperty()
    @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
    password: String;
}