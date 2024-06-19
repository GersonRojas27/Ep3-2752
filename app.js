const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Conexión al MongoDB
mongoose.connect('mongodb://localhost:27017/authdb')
    .then(() => console.log('MongoDB conectado...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.use(express.static(path.join(__dirname, 'public')));

// Rutas para servir las páginas 
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/greeting', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'greeting.html'));
});

// Redirigir a /login por defecto
app.get('/', (req, res) => {
    res.redirect('/login');
});

const PORT = process.env.PORT || 4000 ;
app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));
