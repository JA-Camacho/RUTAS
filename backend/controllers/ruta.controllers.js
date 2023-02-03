const rutas = require('../models/ruta');
const RutasCtrl = {};

RutasCtrl.getRutas = async (req, res)=>{
    const ruta = await rutas.find();
    res.json(ruta);
};

RutasCtrl.getRutasNorte = async (req, res)=>{
    const query =  rutas.find({ "categoria": "NORTE" });
    query.exec((error, ruta) =>{
        if(error){
          res.send(error);
        }
        res.json(ruta);
      });
};

RutasCtrl.getRutasValle = async (req, res)=>{
    const query =  rutas.find({ "categoria": "VALLE" });
    query.exec((error, ruta) =>{
        if(error){
          res.send(error);
        }
        res.json(ruta);
      });
};

RutasCtrl.createRutas= async (req, res) =>{
    const ruta = new rutas({
        sector: req.body.sector,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
    });
    await ruta.save();
    res.json('Estado: ruta Guardado');
};

RutasCtrl.getRuta = async (req, res) =>{
    console.log(req.params.id);
    const query = rutas.find({"_id":"63dc41922d2f2a38447ec495"});
    query.exec((error, ruta) =>{
        if(error){
          res.send(error);
        }
        res.json(ruta);
      });
};

RutasCtrl.editRuta = async (req, res) =>{
  console.log(req.body.sector);  
  const { id } = req.params;
    const ruta = {
        sector: req.body.sector,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
    };
    
    await rutas.findByIdAndUpdate(id, {$set:ruta}, {new:true});
    res.json('status: ruta actualizado');
};
RutasCtrl.deleteRuta = async (req, res) =>{
    await rutas.findByIdAndRemove(req.params.id);
    res.json('status: ruta eliminado');
};


module.exports = RutasCtrl;