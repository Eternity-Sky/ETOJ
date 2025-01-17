const express = require('express');
const Problem = require('../models/Problem');
const router = express.Router();

// 获取所有题目
router.get('/', async (req, res) => {
    const problems = await Problem.find();
    res.json(problems);
});

// 添加新题目
router.post('/', async (req, res) => {
    const newProblem = new Problem(req.body);
    await newProblem.save();
    res.status(201).send('Problem added');
});

// 获取单个题目
router.get('/:id', async (req, res) => {
    const problem = await Problem.findById(req.params.id);
    res.json(problem);
});

module.exports = router; 