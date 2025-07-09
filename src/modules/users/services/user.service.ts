import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from 'src/core/use-cases/create-user.use-case';
import { PrismaUserRepository } from 'src/infrastructure/db/prisma-user.repository';

@Injectable()
export class UserService {
    constructor(private readonly repo: PrismaUserRepository) {}

    createUser(data: { name: string; email: string }) {
        const useCase = new CreateUserUseCase(this.repo);
        return useCase.execute(data);
    }
}
