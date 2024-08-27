const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

// Construir la URI con el parámetro adicional
const URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const conectarDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('BBDD conectada correctamente');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

//conectarDB();
module.exports = conectarDB