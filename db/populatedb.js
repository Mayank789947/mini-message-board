require("dotenv").config();

const { Client } = require("pg");

const SQL = `
  DROP TABLE IF EXISTS messages;
  
   CREATE TABLE  messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
  );

  INSERT INTO messages 
   (text, username)
   VALUES
   ('Hi, there', 'John'),
   ('Hello, there', 'Martha');
`;

async function main() {
    console.log("Seeding...");
    const client = new Client({
        connectionString: process.env.DB_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("Done");
}

main();