import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  selectedEstudiante: Estudiante;
  readonly URL_API = 'http://localhost:3000/api/estudiante';
  estudiantes: Estudiante[] = [];
  constructor(private http: HttpClient) {
    this.selectedEstudiante = new Estudiante();
   }

   getEstudiantes() {
    return this.http.get(this.URL_API);
   }

   getEstudiante(id: string) {
    return this.http.get(this.URL_API + '/' + id);
   }

   getEstudianteR(id_ruta: string){
    return this.http.get(this.URL_API + '/' + id_ruta);
   }

   postEstudiantes(estudiantes: Estudiante){
    return this.http.post(this.URL_API, estudiantes);
   }

   putEstudiantes(estudiantes: Estudiante){
    return this.http.put(this.URL_API + '/$(estudiantes._id)', estudiantes);
   }

   deleteRutas(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
