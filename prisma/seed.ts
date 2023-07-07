import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    // Criação dos funcionários
    const user1 = await prisma.user.create({
      data: {
        name: "Cristiano Silva",
        birthDate: new Date("1992-01-01"),
        position: "Dev Frontend",
        salary: 5000.0,
        imageUrl: "https://avatars.githubusercontent.com/u/102186472?v=4",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        name: "Bill Gates",
        birthDate: new Date("1992-05-15"),
        position: "Dev Backend",
        salary: 4000.0,
        imageUrl: "https://i.imgur.com/v76rx7g.jpg",
      },
    });

    const user3 = await prisma.user.create({
      data: {
        name: "John Carmack",
        birthDate: new Date("1988-10-30"),
        position: "Designer UI/UX",
        salary: 6000.0,
        imageUrl: "https://i.imgur.com/knDwrmG.jpg",
      },
    });

    // Criação dos projetos
    const project1 = await prisma.project.create({
      data: {
        name: "Create Your Burger",
        startDate: new Date("2023-01-01"),
        users: {
          connect: [{ id: user1.id }, { id: user3.id }],
        },
        description:
          "O objetivo é criar um projeto similiar ao Burger King e McDonalds, com um cardapio mas também com a opção de customizar seu proprio lanche. Temos pagina de perfil, historico de pedidos e o carrinho.Tem toda responsividade para ser utilizado no celular.",
        technologies: "React",
        client: "Burgueria Augusta",
        delivery: new Date("2023-04-01"),
      },
    });

    const project2 = await prisma.project.create({
      data: {
        name: "Learning and Laughing",
        startDate: new Date("2023-02-15"),
        users: {
          connect: [{ id: user2.id }],
        },
        description:
          "Tem como objetivo de criar um painel de projeção e controle financeiro para planejamento baseado nos gastos do cotidiano (conta de energia, aluguel, etc). Tem uma pagina de diario, de objetivos mensais, uma pagina com analise grafica e um painel",
        technologies: "React",
        client: "Technologies Company",
        delivery: new Date("2023-04-01"),
      },
    });

    console.log("Dados de exemplo inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados de exemplo:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
