const sqlite3 = require('sqlite3').verbose();

const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient(); // * Instantiate Prisma Client


// * Body of function where the queries to db will be sent
async function queries () {
  await prisma.recipe.create({
    data: {
      title: 'Lasagne',
      ingredients: 'Ragu, Sugo, pasta, parmigiano',
      steps: 'cook, eat',
      author: {
        create: {
          name: 'Andrea',
          email: 'andrea@chef.com'
        }
      },
      authorId: 1
    }
  });

  const newRecipe = await prisma.recipe.update({
    where: {id: 1},
    data: {title: 'Fettuccine'},
  })


  console.log(newRecipe)
} 

queries()
  .catch(error => {
    throw error
  })
  .finally(async () => {
    await prisma.$disconnect();
  })