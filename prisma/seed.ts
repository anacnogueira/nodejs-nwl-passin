import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "6e3d11e0-69da-4dd0-b691-8d6cc690bce9",
      title: "Unite Summit",
      slug: "unite-summmit",
      details: "Um evento para devs apaixonados pro programação",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database Seeded");
  prisma.$disconnect();
});
