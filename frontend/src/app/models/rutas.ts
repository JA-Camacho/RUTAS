export class Rutas {
    constructor(_id='', sector='', categoria='', descripcion='', foto=''){
        this._id = _id;
        this.sector = sector;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.foto = foto;
    }

    _id: string;
    sector: string;
    categoria: string;
    descripcion: string;
    foto: string;
}
