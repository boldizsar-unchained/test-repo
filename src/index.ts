import Knex from "knex";

const main = async () => {
  const knex = Knex({
    client: "pg",
    connection: {
      user: "postgres",
      password: "C6,~e)74m?Z/0A^b",
      database: "buildcore",
      host: "127.0.0.1",
    },
  });

  const sel = await knex("member").limit(1);
  console.log(sel);

  await knex.destroy();
};

main();
