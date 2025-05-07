const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL,
    barcode TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    cnpj TEXT,
    address TEXT,
    contact TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS product_suppliers (
    product_id INTEGER,
    supplier_id INTEGER,
    PRIMARY KEY (product_id, supplier_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
  )`);
});

module.exports = db;
