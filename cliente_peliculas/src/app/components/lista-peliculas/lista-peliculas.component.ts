import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { SPeliculasService } from 'src/app/services/s-peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  peliculas:Pelicula[] = new Array<Pelicula>();

  constructor(private servicioPeliculas:SPeliculasService) {

   }

  ngOnInit(): void {
    this.servicioPeliculas.getPeliculas().subscribe(
      peliculas =>{
        this.peliculas = peliculas;
      }
    )
  }

}
