// models/db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./face.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      encoding TEXT NOT NULL
    )
  `);
});

module.exports = db;