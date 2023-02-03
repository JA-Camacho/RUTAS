import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../models/estudiante';
import { Rutas } from '../models/rutas';
import { EstudianteService } from '../services/estudiante.service';
import { RutasService } from '../services/rutas.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../models/admin';

declare var M: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  constructor(
    public estudiantesService: EstudianteService,
    public rutasService: RutasService,
    public adminsService: AdminService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getEstudiantes();
    this.getRutas();
    this.getAdmins();
  }

  getEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe((res) => {
      this.estudiantesService.estudiantes = res as Estudiante[];
    });
  }

  getRutas() {
    this.rutasService.getRutas().subscribe((res) => {
      this.rutasService.rutas = res as Rutas[];
    });
  }

  getAdmins(){
    this.adminsService.getAdmins().subscribe((res) =>{
      this.adminsService.admins = res as Admin[];
    })
  }
  nombres: string = '';
  correo: string = '';
  correoI: string = '';
  contra: string = '';
  contraI: string = '';
  carrera: string = 'Escoja su carrera';
  id: string = '';
  ruta: string = '';
  
  registrar() {
    let flag = true;
    this.estudiantesService.estudiantes.forEach((datos) => {
      if (datos.correoInst == this.correo) {
        flag = false;
        return alert('Este correo ya existe en nuestra base de datos');
      }
    });
    if (flag) {
      let estud = new Estudiante(
        this.nombres,
        this.correo,
        this.contra,
        this.carrera,
        this.id
      );
      this.estudiantesService.postEstudiantes(estud).subscribe((res) => {
        M.toast({ html: 'Usuario Guardado' });
        this.resetForm();
        this.router.navigateByUrl('/registro');
      });
    }
  }
  ingresar(){
    let flag = true;
    this.estudiantesService.estudiantes.forEach((datos) => {
      if(this.correoI === datos.correoInst && this.contraI === datos.contra)
      {  
        this.resetForm();
        this.router.navigate(['/pag-est/', datos.id_rutas]);
        flag=false;
      }
    })
    this.adminsService.admins.forEach((datos) =>{
      if(this.correoI === datos.user && this.contraI === datos.pass)
      {
        this.resetForm();
        this.router.navigate(['/pag-admin/']);
        flag=false;
      }
    })
    if(flag)
    alert("No Existe el usuario o contraseña incorrecta");
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}
