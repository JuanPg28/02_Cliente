export class Pelicula {
    identificador: number;
    titulo: string;
    sinopsis: string;
    anyo: number;
    imagen: string;
    video: string;

    constructor(identificador: number, titulo: string, sinopsis: string, anyo: number, imagen: string, video: string){
        this.identificador=identificador;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.anyo=anyo;
        this.imagen=imagen;
        this.video=video;
    }
}