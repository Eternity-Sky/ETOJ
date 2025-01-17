const express = require('express');
const Submission = require('../models/Submission');
const router = express.Router();

// 提交代码
router.post('/', async (req, res) => {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    res.status(201).send('Submission received');
});

// 获取用户提交记录
router.get('/:userId', async (req, res) => {
    const submissions = await Submission.find({ userId: req.params.userId });
    res.json(submissions);
});

module.exports = router; 