import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  safeUrl: any;

  @Input() pelicula:Pelicula = new Pelicula(0,"","",0,"","");
  constructor(private _sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.pelicula.video);
  }

}
