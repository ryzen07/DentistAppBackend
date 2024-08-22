const express = require('express');
const consultorioRouter = require('./routers/consultorioRouter');
const consultorioUsers = require('./routers/consultorioUsers');
const conectarDB = require('./db/db');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); 
conectarDB();

app.use('/api/pacientes', consultorioRouter);
app.use('/api/usuarios', consultorioUsers);


app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
});
