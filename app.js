const express = require('express');
const bodyParser = require('body-parser');
const librosRoutes = require('./routes/librosRoutes');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/libros', librosRoutes);

app.listen(8080, () => {
    console.log(`server iniciado en http://localhost:8080`);
});