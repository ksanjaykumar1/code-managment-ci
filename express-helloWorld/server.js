const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const helloMessage = `Hello World`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}  `);
});
