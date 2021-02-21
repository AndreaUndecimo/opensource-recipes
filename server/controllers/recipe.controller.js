const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createRecipe(req, res) {
  const { title, ingredients, authorId, authorName, authorEmail } = req.body;

  try {
    const newRecipe = await prisma.create({
      data: {
        title,
        ingredients,
        authorId,
        author: { connect: { email: authorEmail, name: authorName } },
      },
    });

    res.status(200).send(newRecipe);
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  createRecipe();
}

main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });


  module.exports = 