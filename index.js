const express = require('express');
const app = express();
const port = 8080;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'example message from ECS' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
