export class Rutas {
    constructor(_id='', sector='', categoria='', descripcion=''){
        this._id = _id;
        this.sector = sector;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }

    _id: string;
    sector: string;
    categoria: string;
    descripcion: string;
}
