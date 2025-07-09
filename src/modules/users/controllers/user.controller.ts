import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async register(@Body() dto: CreateUserDto) {
        const user = await this.userService.createUser(dto);
        return { id: user.id, name: user.name, email: user.email };
    }
}
