const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World, bootcamp Ignite!' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333.');
});
