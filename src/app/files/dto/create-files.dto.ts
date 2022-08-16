import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFilesDto {
    
    @IsNotEmpty()
    @ApiProperty()
    title: String;

    @IsNotEmpty()
    @ApiProperty()
    content: String;
}