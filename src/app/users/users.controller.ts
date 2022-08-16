import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/users')
@ApiTags("Users")
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary: 'List all user register'})
    @ApiResponse({status: 200, description: 'List all user'})
    @ApiResponse({status: 401, description: 'Access denid'})
    async index(){
        return await this.usersService.findAll();
    }

    @Post()
    @ApiOperation({summary: 'Register new user'})
    async store(@Body() body: CreateUserDto){
        return await this.usersService.store(body);
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary: 'Detail user register'})
    async show(@Param('id', new ParseUUIDPipe()) id: string){
        return await this.usersService.findById(id)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary: 'Update user'})
    async update(
        @Param('id', new ParseUUIDPipe()) id: string, 
        @Body() body: UpdateUserDto
    ){
        return await this.usersService.update(id, body);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({summary: 'Delete user'})
    async destroy(@Param('id', new ParseUUIDPipe()) id: string){
        await this.usersService.destroy(id);
    }

}
