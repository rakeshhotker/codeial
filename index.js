const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, (req, res) => {
  res = `Server running on Port:${PORT}`;
  console.log(res);
});
