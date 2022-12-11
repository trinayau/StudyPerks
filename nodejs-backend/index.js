const app = require('./server')
const port = process.env.PORT || 3001;
// const init = require("./db/mongoInit.js");

app.listen(port, () => console.log(`Express now departing from port ${port}!`))

const { Client } = require("pg");

(async () => {
  const client = new Client({
    connectionString: 'postgresql://trini:hackathonwin@study-perks-3878.6zw.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full',
    application_name: "$ study-perks"
  });

  const statements = [
    // Clear any existing data
    "DROP TABLE IF EXISTS messages",
    // CREATE the messages table
    "CREATE TABLE IF NOT EXISTS messages (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), message STRING)",
    // INSERT a row into the messages table

    "INSERT INTO messages (message) VALUES ('Hello world!')",
    // SELECT a row from the messages table
    "SELECT message FROM messages",
  ];


  try {
    // Connect to CockroachDB
    await client.connect();
    for (let n = 0; n < statements.length; n++) {
      let result = await client.query(statements[n]);
      if (result.rows[0]) { console.log(result.rows[0].message); }
    }
    await client.end();
  } catch (err) {
    console.log(`error connecting: ${err}`);
  }

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));

// option to add oerks to the database
const addPerk = async (perk) => {
  const perkRef = db.collection('perks').doc();
  await perkRef.set({
    perkId: perkRef.id,
    perkName: perk.perkName,
    perkDescription: perk.perkDescription,
    perkPoints: perk.perkPoints,
    perkCategory: perk.perkCategory,
    perkQuantity: perk.perkQuantity,
  });
    return perkRef.id;
}

addPerk(
    {
        perkName: 'Starbucks',
        perkDescription: 'Tall Latte/Cuppucino/Americano/tea',
        perkImage: 'https://www.coffeeshop.com/coffee.jpg',
        perkPoints: 200,
        perkCategory: 'Food',
        perkQuantity: 10,
    }

)
addPerk(
    {
        perkName: 'Costa',
        perkDescription: 'Medium Latte/Cuppucino/Americano/tea',
        perkImage: 'https://www.coffeeshop.com/coffee.jpg',
        perkPoints: 200,
        perkCategory: 'Food',
        perkQuantity: 10,
    }

)
addPerk(
    {
        perkName: 'Gongcha',
        perkDescription: 'Milk tea with pearls',
        perkImage: 'https://www.coffeeshop.com/coffee.jpg',
        perkPoints: 300,
        perkCategory: 'Food',
        perkQuantity: 20,
    }

)
