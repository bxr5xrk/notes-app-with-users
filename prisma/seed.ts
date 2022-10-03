import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // await prisma.user.create({
    //     data: {
    //         email: `testemail@gmail.com`,
    //         userName: "testUser",
    //     },
    // });

    await prisma.note.create({
        data: {
            title: "title note",
            content: "content content",
            category: "Idea",
            authorId: "4b3c667c-bfa7-4a56-b4ca-ad18f71bc449",
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
