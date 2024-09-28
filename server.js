const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on the port defined by Heroku or 3000 locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
