# NestJS Fintech Starter

## Setup

1. npm install -g @nestjs/cli
2. npm install prisma -g
3. Copy `.env.example` → `.env`; set `DATABASE_URL=postgresql://...`
4. `npm install`
5. `npx prisma migrate dev --name init`
6. `npm run start:dev`

## Instructions
Visit [Building a (NestJS) Application with Clean Architecture](http://localhost:3000)

## Structure

- `core/`: Domain logic & use-cases
- `infrastructure/`: DB adapters (Prisma)
- `modules/`: NestJS controllers & services
- `auth/`, `shared/`: JWT Auth, roles, filters

## Next Steps

- Add JWT-auth (`auth/`)
- Add `RolesGuard` and decorators
- Integrate Stripe/Paystack in `infrastructure/payments/`
- Add tests for use-cases