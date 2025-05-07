const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM suppliers', [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, cnpj, address, contact } = req.body;
  db.run('INSERT INTO suppliers (name, cnpj, address, contact) VALUES (?, ?, ?, ?)',
    [name, cnpj, address, contact], function(err) {
    if (err) return res.status(500).json(err);
    res.json({ id: this.lastID });
  });
});

router.put('/:id', (req, res) => {
  const { name, cnpj, address, contact } = req.body;
  db.run('UPDATE suppliers SET name = ?, cnpj = ?, address = ?, contact = ? WHERE id = ?',
    [name, cnpj, address, contact, req.params.id], function(err) {
    if (err) return res.status(500).json(err);
    res.json({ updated: this.changes });
  });
});

router.delete('/:id', (req, res) => {
  db.run('DELETE FROM suppliers WHERE id = ?', req.params.id, function(err) {
    if (err) return res.status(500).json(err);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
