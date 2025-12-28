const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  database: "postgres", // یا shadi
  port: 5432,
  // password لازم نیست چون trust فعاله
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("✅ Connected to PostgreSQL successfully");
  } catch (error) {
    console.error("❌ Error connecting to PostgreSQL:", error);
  }
}

connectToDB();

module.exports = client;
