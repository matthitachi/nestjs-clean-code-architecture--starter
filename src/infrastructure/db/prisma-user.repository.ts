
import { IUserRepository } from 'src/core/ports/user-repo.port';
import { User } from 'src/core/entities/user.entity';
import {PrismaClient} from "@prisma/client/extension";

export class PrismaUserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    async save(user: User): Promise<User> {
        const saved = await this.prisma.user.create({ data: user });
        return new User(saved.id, saved.name, saved.email, saved.role as any);
    }

    async findByEmail(email: string): Promise<User | null> {
        const u = await this.prisma.user.findUnique({ where: { email } });
        return u ? new User(u.id, u.name, u.email, u.role as any) : null;
    }
}
