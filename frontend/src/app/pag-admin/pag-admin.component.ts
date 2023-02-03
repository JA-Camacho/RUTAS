import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { Estudiante } from '../models/estudiante';
import { Rutas } from '../models/rutas';
import { AdminService } from '../services/admin.service';
import { EstudianteService } from '../services/estudiante.service';
import { RutasService } from '../services/rutas.service';

@Component({
  selector: 'app-pag-admin',
  templateUrl: './pag-admin.component.html',
  styleUrls: ['./pag-admin.component.scss']
})
export class PagAdminComponent implements OnInit{
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
  editRuta(_id:string, sector: string, categoria: string, descripcion: string){
    
    /*let rut = new Rutas(
      _id,
      sector,
      categoria,
      descripcion
    );
    this.rutasService.putRutas(rut).subscribe((res) =>{
      
    })*/
  }
  borrarRuta(_id: string){
    if(confirm('Estás seguro de quieres borrar?')){
      this.rutasService.deleteRutas(_id)
      .subscribe(res =>{
        console.log(res);
        this.getRutas();        
      });
    }
  }
}
