import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SPeliculasService {
  peliculas:Observable<Pelicula[]>=new Observable();
  constructor(private clienteHttp: HttpClient) { 

  }

  getPeliculas(): Observable<Pelicula[]> {
    console.log("Obteniendo peliculas del WS");
    this.peliculas = this.clienteHttp.get<Pelicula[]>("http://localhost:8081/peliculasJSON")
    return this.peliculas;
  }
}
