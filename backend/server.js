// backend-app/server.js
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: '¡Hola Jenny💖!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
