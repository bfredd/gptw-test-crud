import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
@Controller('api/auth')
@ApiTags("Authentication")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({summary: 'List all user register'})
  @ApiResponse({status: 201, description: 'User was authenticated!'})
  @ApiResponse({status: 401, description: 'User not found'})
  async login(@Req() req: LoginDto) {
    return await this.authService.login(req.user);
  }
}
