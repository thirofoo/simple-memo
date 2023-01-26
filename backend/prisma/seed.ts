import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const first = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Hello,World!",
      title: "first_memo",
		  content: "This is first memo!" 
  	},
  });

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null })
}

main()
	// Promiseが失敗した時
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })