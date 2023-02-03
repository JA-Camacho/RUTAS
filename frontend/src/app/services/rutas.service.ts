import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rutas } from '../models/rutas';
@Injectable({
  providedIn: 'root',
})
export class RutasService {
  selectedRuta: Rutas;
  readonly URL_API = 'http://localhost:3000/api/ruta';
  rutas: Rutas[] = [];
  constructor(private http: HttpClient) {
    this.selectedRuta = new Rutas();
  }
  
  getRuta(_id: string) {
    return this.http.get(this.URL_API + '/' + _id);
  }
  getRutas() {
    return this.http.get(this.URL_API);
  }
  getNorte() {
    return this.http.get(this.URL_API + "/norte");
  }
  getValle() {
    return this.http.get(this.URL_API + "/valle");
  }
  postRutas(rutas: Rutas) {
    return this.http.post(this.URL_API, rutas);
  }

  putRutas(rutas: Rutas) {
    return this.http.put(this.URL_API + '/$(gasto._id)', rutas);
  }

  deleteRutas(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
