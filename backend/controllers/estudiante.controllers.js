const estudiante = require("../models/estudiante");
const Estudiantes = require("../models/estudiante");
const EstudianteCtrl = {};

EstudianteCtrl.getEstudiantes = async (req, res) => {
  const estudiante = await Estudiantes.find();
  res.json(estudiante);
  
};
EstudianteCtrl.createEstudiantes = async (req, res) => {
  const estudiante = new Estudiantes({
    nombres: req.body.nombres,
    correoInst: req.body.correoInst,
    contra: req.body.contra,
    carrera: req.body.carrera,
    id_rutas: req.body.id_rutas
  });
  await estudiante.save();
  res.json("Estado: estudiante Guardado");
};
EstudianteCtrl.getEstudiante = async (req, res) => {
  console.log(req.params.id);
  const estudiante = await Estudiantes.findById(req.params.id);
  res.json(estudiante);
};
EstudianteCtrl.getEstudianteR = async (req, res) => {
  const query = Estudiantes.find({"id_ruta" : req.params.id_ruta});
  query.exec((error, estudiante) =>{
    if(error){
      res.send(error);
    }
    res.json(estudiante);
  });
};
EstudianteCtrl.editEstudiante = async (req, res) => {
  const { id } = req.params;
  const estudiante = {
    nombres: req.body.nombres,
    correoInst: req.body.correoInst,
    contra: req.body.contra,
    carrera: req.body.carrera,
    id_rutas: req.body.id_rutas
  };
  await Estudiantes.findByIdAndUpdate(id, { $set: estudiante }, { new: true });
  res.json("status: estudiante actualizado");
};
EstudianteCtrl.deleteEstudiante = async (req, res) => {
  await Estudiantes.findByIdAndRemove(req.params.id);
  res.json("status: estudiante eliminado");
};

module.exports = EstudianteCtrl;