const express = require('express');
const app = express();
const PORT = 8000;
//use express router
app.use('/', require('./routes'));
app.listen(PORT, function (err) {
  if (!err) {
    console.log(`Server running on PORT:${PORT}`);
    return;
  }
  console.log(`Error running server on PORT:${err}`);
});
