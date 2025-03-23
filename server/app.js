const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS Enabled Successfully!' });
});

// MongoDB Connection (Example)
mongoose.connect('mongodb://127.0.0.1:27017/hirenest')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ Serve React Build Files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// ✅ Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ message: '✅ Server is working fine!' });
});

// ✅ Start Server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server is Running on http://localhost:${PORT}`);
});
