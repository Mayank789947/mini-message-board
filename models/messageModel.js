const pool = require("../db/pool");

async function getAllMessages() {
    const result = await pool.query(
        `
        SELECT id, text, username, created_at
         FROM messages
         ORDER BY created_at desc;
        `
        );

    return result.rows;
}

module.exports = {
    getAllMessages
}