const admins = require('../models/admin');
const AdminCtrl = {};

AdminCtrl.getAdmins = async (req, res)=>{
    const admin = await admins.find();
    res.json(admin);
};
AdminCtrl.createAdmins= async (req, res) =>{
    const admin = new admins({
        user: req.body.user,
        pass: req.body.pass
    });
    await admin.save();
    res.json('Estado: admin Guardado');
};
AdminCtrl.getAdmin = async (req, res) =>{
    console.log(req.params.id);
    const admin = await admins.findById(req.params.id);
    res.json(admin);
};
AdminCtrl.editAdmin = async (req, res) =>{
    const { id } = req.params;
    const admin = {
        user: req.body.user,
        pass: req.body.pass
    };
    await admins.findByIdAndUpdate(id, {$set:admin}, {new:true});
    res.json('status: admin actualizado');
};
AdminCtrl.deleteAdmin = async (req, res) =>{
    await admins.findByIdAndRemove(req.params.id);
    res.json('status: admin eliminado');
};


module.exports = AdminCtrl;