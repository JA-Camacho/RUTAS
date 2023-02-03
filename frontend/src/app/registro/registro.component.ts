import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../models/estudiante';
import { Rutas } from '../models/rutas';
import { EstudianteService } from '../services/estudiante.service';
import { RutasService } from '../services/rutas.service';

declare var M: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  constructor(
    public estudiantesService: EstudianteService,
    public rutasService: RutasService
  ) {}
  ngOnInit(): void {
    this.getEstudiantes();
    this.getRutas();
  }

  getEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe((res) => {
      this.estudiantesService.estudiantes = res as Estudiante[];
      console.log(res);
    });
  }

  getRutas() {
    this.rutasService.getRutas().subscribe((res) => {
      this.rutasService.rutas = res as Rutas[];
      console.log(res);
    });
  }
  nombres: string = '';
  correo: string = '';
  correoI: string = '';
  contra: string = '';
  contraI: string = '';
  carrera: string = 'Escoja su carrera';
  id: string = '';
  ruta: string = 'Escoja su secto';
  flag: boolean = true;
  registrar() {
    this.estudiantesService.estudiantes.forEach((datos) => {
      if (datos.correoInst == this.correo) {
        this.flag = false;
        return alert('Este correo ya existe en nuestra base de datos');
      }
      console.log('SI');
    });
    if (this.flag) {
      let estud = new Estudiante(
        this.nombres,
        this.correo,
        this.contra,
        this.carrera,
        this.id
      );
      this.estudiantesService.postEstudiantes(estud).subscribe((res) => {
        console.log(res);
        M.toast({ html: 'Usuario Guardado' });
        this.resetForm();
      });
    }
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}
