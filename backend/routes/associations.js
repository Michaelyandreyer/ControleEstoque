const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.all(`SELECT ps.product_id, ps.supplier_id, p.name as product_name, s.name as supplier_name
          FROM product_suppliers ps
          JOIN products p ON ps.product_id = p.id
          JOIN suppliers s ON ps.supplier_id = s.id`, [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { product_id, supplier_id } = req.body;
  db.run('INSERT INTO product_suppliers (product_id, supplier_id) VALUES (?, ?)',
    [product_id, supplier_id], function(err) {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

router.delete('/', (req, res) => {
  const { product_id, supplier_id } = req.body;
  db.run('DELETE FROM product_suppliers WHERE product_id = ? AND supplier_id = ?',
    [product_id, supplier_id], function(err) {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

module.exports = router;
