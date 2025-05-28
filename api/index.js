const express = require('express');
const cors = require('cors');
const { ejecutarTransformacion } = require('./ejecutar_c');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/:tipo', (req, res) => {
    const { tipo } = req.params;
    const valores = Object.values(req.body);
    ejecutarTransformacion(tipo, valores, (err, resultado) => {
        if (err) return res.status(500).send(err);
        res.json({ resultado });
    });
});

app.listen(3001, () => {
    console.log("Servidor en http://localhost:3001");
});

