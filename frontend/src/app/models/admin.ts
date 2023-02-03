export class Admin {
    constructor(_id='', user='', pass='', descripcion=''){
        this._id = _id;
        this.user = user;
        this.pass = pass;
    }
    _id: string;
    user: string;
    pass: string;
}