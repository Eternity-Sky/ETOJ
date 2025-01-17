const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const problemRoutes = require('./routes/problems');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/oj', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 