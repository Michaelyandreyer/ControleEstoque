const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, description, price, barcode } = req.body;
  db.run('INSERT INTO products (name, description, price, barcode) VALUES (?, ?, ?, ?)',
    [name, description, price, barcode], function(err) {
    if (err) return res.status(500).json(err);
    res.json({ id: this.lastID });
  });
});

router.put('/:id', (req, res) => {
  const { name, description, price, barcode } = req.body;
  db.run('UPDATE products SET name = ?, description = ?, price = ?, barcode = ? WHERE id = ?',
    [name, description, price, barcode, req.params.id], function(err) {
    if (err) return res.status(500).json(err);
    res.json({ updated: this.changes });
  });
});

router.delete('/:id', (req, res) => {
  db.run('DELETE FROM products WHERE id = ?', req.params.id, function(err) {
    if (err) return res.status(500).json(err);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
