const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

let counter = 0;

// Get current counter
app.get('/counter', (req, res) => {
  res.json({ counter });
});

// Increment counter
app.post('/counter/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Decrement counter with non-negative constraint
app.post('/counter/decrement', (req, res) => {
  if (counter > 0) counter--;
  res.json({ counter });
});

// Set counter (if needed)
app.post('/counter/set', (req, res) => {
  const { counter: newCounter } = req.body;
  if (typeof newCounter === 'number' && newCounter >= 0) {
    counter = newCounter;
    res.json({ counter });
  } else {
    res.status(400).json({ error: 'Invalid counter value' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
