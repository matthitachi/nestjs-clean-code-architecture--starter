import { IUserRepository } from '../ports/user-repo.port';
import { User } from '../entities/user.entity';

export class CreateUserUseCase {
    constructor(private readonly userRepo: IUserRepository) {}

    async execute(data: { name: string; email: string }): Promise<User> {
        const exists = await this.userRepo.findByEmail(data.email);
        if (exists) throw new Error('Email already exists');

        const user = new User(crypto.randomUUID(), data.name, data.email, 'USER');
        return this.userRepo.save(user);
    }
}
