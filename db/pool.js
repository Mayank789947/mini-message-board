const { Pool } = require("pg");

console.log("DB_URL exists:", !!process.env.DB_URL);
console.log("DB_URL starts with:", process.env.DB_URL?.slice(0, 40));

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("error", (err) => {
  console.error("Pool Error:", err);
});

module.exports = pool;