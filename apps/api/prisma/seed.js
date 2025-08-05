const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Contoh: buat user dummy
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: 'password123',
      name: 'User Example',
    },
  })
  console.log({ user })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
