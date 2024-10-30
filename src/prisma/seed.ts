import { PrismaClient } from "@prisma/client";

async function main() {
    const prisma = new PrismaClient();
    try {
        await prisma.user.create({
            data: {
                first_name: 'test',
                last_name: 'test',
                username: 'test'
            }
        });
        console.log('Datos guardados.');
    } catch (e) {
        console.log(e);
        await prisma.$disconnect();
    } finally {
        await prisma.$disconnect();
    }
}

main();