import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  save(pelicula:any):Observable<any>{
    console.log("Guardando..." + pelicula);
    const body = {};
    const parametros = new HttpParams()
            .append('titulo', pelicula.titulo)
            .append('sinopsis', pelicula.sinopsis)
            .append('anyo', pelicula.anyo)
            .append('imagen', pelicula.imagen)
            .append('video', pelicula.video);
    const retorno = this.clienteHttp.post<any>("http://localhost:8081/peliculasnew", body, {params:parametros});
    return retorno;
  }

  
}
