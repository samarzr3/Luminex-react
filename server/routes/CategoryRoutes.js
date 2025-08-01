
const express = require('express');
const router = express.Router();
const Category = require('../models/Caregory');


router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const saved = await newCategory.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error saving category', error: error.message });
  }
});

router.post('/bulk', async (req, res) => {
  try {
    const inserted = await Category.insertMany(req.body);
    res.status(201).json(inserted);
  } catch (error) {
    res.status(400).json({ message: 'Error inserting categories', error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Category not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error updating category', error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting category', error: error.message });
  }
});

module.exports = router;
