const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
  // Define your API endpoints here
  res.json({msg: 'Hello from Node.js!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
