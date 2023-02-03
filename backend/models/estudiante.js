const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstudiantesSchema = new Schema({
    nombres: {type: String, required: true},
    correoInst: {type: String, required: true},
    contra: {type: String, required: true},
    carrera: {type: String, required: true},
    id_rutas: {type: String, required: true}
});

module.exports = mongoose.model('Estudiante', EstudiantesSchema);