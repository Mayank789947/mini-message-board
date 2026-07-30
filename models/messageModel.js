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

async function getMessageById(id) {
    const result = await pool.query(
        `
         SELECT id, text, username, created_at
           FROM messages
           WHERE id = $1;
        `,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    getAllMessages,
    getMessageById
}