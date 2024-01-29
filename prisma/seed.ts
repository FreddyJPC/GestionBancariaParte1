import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed Users
    const user1 = await prisma.user.create({
      data: {
        email: 'john@example.com',
        name: 'John Doe',
        password: 'hashed_password',
        accounts: { // Adjusted
          create: [
            {
              accountNumber: '123456789',
              balance: 1000.0,
            }
          ]
        }
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: 'jane@example.com',
        name: 'Jane Doe',
        password: 'hashed_password',
        accounts: { // Adjusted
          create: [
            {
              accountNumber: '987654321',
              balance: 500.0,
            }
          ]
        }
      },
    });

    // Seed Transactions
    const transaction1 = await pr
