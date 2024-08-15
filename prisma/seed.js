const { PrismaClient } = require('@prisma/client')
const hospitals = require('./hospitals.json')
const prisma = new PrismaClient()

async function main() {
  for (const hospital of hospitals) {
    await prisma.hospital.create({
      data: hospital,
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
