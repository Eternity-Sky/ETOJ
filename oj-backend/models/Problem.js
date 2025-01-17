const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    input: { type: String, required: true },
    output: { type: String, required: true },
    examples: { type: Array, required: true }
});

module.exports = mongoose.model('Problem', problemSchema); 