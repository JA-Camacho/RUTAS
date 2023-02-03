import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { Rutas } from '../models/rutas';
import { EstudianteService } from '../services/estudiante.service';
import { RutasService } from '../services/rutas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pag-est',
  templateUrl: './pag-est.component.html',
  styleUrls: ['./pag-est.component.scss'],
  providers: [EstudianteService],
})
export class PagEstComponent implements OnInit{
  constructor(
    public estudianteService: EstudianteService,
    public rutasService: RutasService,
    public route: ActivatedRoute
  ) {}
  id_rutas :string = '';
  ngOnInit(): void {
    this.id_rutas = this.route.snapshot.params['id_rutas'];
    console.log(this.id_rutas);
    this.getEstudiantes();
    this.getRutas();
  }
  getEstudiantes(){
    this.estudianteService.getEstudianteR(this.id_rutas).subscribe((res) =>{
      this.estudianteService.estudiantes = res as Estudiante[];
    })
  }

  getRutas() {
    this.rutasService.getRutas().subscribe((res) => {
      this.rutasService.rutas = res as Rutas[];
      console.log(res);
    });
  }
}
