const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

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



app.listen(3000, () => console.log("Server running on port 3000"));
