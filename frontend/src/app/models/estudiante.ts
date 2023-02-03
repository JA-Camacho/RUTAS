export class Estudiante {
    constructor(nombres='', correoInst='', contra='', carrera='', id_rutas='', telf=""){
        this.nombres = nombres;
        this.correoInst = correoInst;
        this.contra = contra;
        this.carrera = carrera;
        this.id_rutas = id_rutas;
        this.telf = telf;
    }
    nombres: string;
    correoInst: string;
    contra: string;
    carrera: string;
    id_rutas: string;
    telf: string;
}