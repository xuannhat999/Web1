const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Dùng thư mục public để chứa frontend (html/css/js)
app.use(express.static(path.join(__dirname, 'public')));

// API mẫu
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Xin chào từ backend Node.js!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
