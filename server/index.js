const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Hi:  "There!" });
});

const PORT = process.env.PORT || 5000;
console.log('Listening to '+ PORT);
app.listen(5000);
