const mongoose = require('mongoose');
const { Schema } = mongoose;

const RutaSchema = new Schema({
    sector: {type: String, required: true},
    categoria: {type: String, required: true},
    descripcion: {type: String, required: true}
});

module.exports = mongoose.model('Rutas', RutaSchema);