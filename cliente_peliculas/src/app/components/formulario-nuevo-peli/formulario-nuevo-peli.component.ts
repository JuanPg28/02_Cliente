import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { SPeliculasService } from 'src/app/services/s-peliculas.service';

@Component({
  selector: 'app-formulario-nuevo-peli',
  templateUrl: './formulario-nuevo-peli.component.html',
  styleUrls: ['./formulario-nuevo-peli.component.css']
})
export class FormularioNuevoPeliComponent implements OnInit {
  formulario: FormGroup;//Variable que va contener la info del formulario
  constructor(private servicioPeliculas: SPeliculasService, private router: Router) {
    this.formulario = new FormGroup({
      identificador: new FormControl(),
      titulo: new FormControl(),
      sinopsis: new FormControl(),
      anyo: new FormControl(),
      imagen: new FormControl(),
      video: new FormControl
    })
  }

  ngOnInit(): void {
  }

  crearPelicula() {
    if (!this.formulario.invalid) {
      this.servicioPeliculas.save(this.formulario.value).subscribe(
        respuesta => {
          this.procesarRespuesta(respuesta);
        })
    }
  }
  procesarRespuesta(respuesta:any){
    console.log("Insertando...");
    this.formulario.reset();
    this.router.navigate(['listado']);
  }

}
