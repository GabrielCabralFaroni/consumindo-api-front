import { Component, OnInit } from '@angular/core';
import { Planeta } from '../models/planeta';
import { PlanetaService } from '../service/planeta.service';


@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  planetas?: Planeta[];

  constructor(private planetaService: PlanetaService) { }

  ngOnInit() {
    this.buscarPlanetas();
  }

  buscarPlanetas() {
    this.planetaService.buscarPlanetas().subscribe(
      (planetas: Planeta[]) => {
        this.planetas = planetas;
      },

    );
  }
}

