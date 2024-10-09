const Libro = require('../models/libro');

let libros = [];

const obtenerLibros = (req, res) => {
    res.json(libros);
};

const obtenerLibroPorId = (req, res) => {
    const libro = libros.find(libro => libro.id === parseInt(req.params.id));
    if (libro) {
        res.json(libro);
    } else {
        console.error('no se encontro un libro con el id ' + req.params.id);
    }
};

const crearLibro = (req, res) => {
    const { titulo, autor, año } = req.body;
    const nuevoLibro = new Libro(libros.length + 1, titulo, autor, año);
    libros.push(nuevoLibro);

    res.redirect('/libros'); //para que el form no se trabe luego de enviar un libro
};

const actualizarLibro = (req, res) => {
    const libro = libros.find(libro => libro.id === parseInt(req.params.id));
    if (libro) {
        const { titulo, autor, año } = req.body;
        libro.titulo = titulo;
        libro.autor = autor;
        libro.año = año;
        res.json(libro);
    } else {
        console.error('no se encontro el libro, no se puede actualizar');
    }
};

const borrarLibro = (req, res) => {
    const indice = libros.findIndex(l => l.id === parseInt(req.params.id));
    let libroEncontrado = indice !== -1;
    if (libroEncontrado) {
        libros.splice(indice, 1);
    } else {
        console.error('no se encontro el libro, no se puede borrar');
    }
};

module.exports = {
    obtenerLibros,
    obtenerLibroPorId,
    crearLibro,
    actualizarLibro,
    borrarLibro
};