const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

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
  console.log(`🚀 Server is listening on port ${PORT}`);
});
