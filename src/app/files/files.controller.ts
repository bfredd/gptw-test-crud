import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { FilesService } from './files.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFilesDto } from './dto/create-files.dto';

@Controller('api/v1/files')
@ApiTags("Files")
export class FilesController {

    constructor(private readonly filesService: FilesService) {}

    @Post()
    @ApiOperation({summary: 'Upload File'})
    async store(@Body() body: CreateFilesDto){
        return await this.filesService.store(body);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary: 'List all files'})
    @ApiResponse({status: 200, description: 'List all files'})
    @ApiResponse({status: 401, description: 'Access denid'})
    async index(){
        return await this.filesService.findAll();
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({summary: 'Delete file'})
    async destroy(@Param('id', new ParseUUIDPipe()) id: string){
        await this.filesService.destroy(id);
    }

}