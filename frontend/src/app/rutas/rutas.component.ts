import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rutas } from '../models/rutas';
import { RutasService } from '../services/rutas.service';
import { ActivatedRoute } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss'],
  providers: [RutasService],
})
export class RutasComponent implements OnInit {
  categoria: string = '';
  constructor(
    public rutasService: RutasService,
    public route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    
    this.categoria = this.route.snapshot.params['categoria'];
    this.getRutas(this.categoria);
  }

  getRutas(categoria : string) {
    console.log(categoria);
    if (categoria === "VALLE") {
      this.rutasService.getValle().subscribe((res) => {
        this.rutasService.rutas = res as Rutas[];
        console.log(res);
      });
    } else if (categoria == 'NORTE') {
      this.rutasService.getNorte().subscribe((res) => {
        this.rutasService.rutas = res as Rutas[];
        console.log(res);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.rutasService.selectedRuta = new Rutas();
    }
  }
}
