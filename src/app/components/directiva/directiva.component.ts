import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso:string[]=["Java","C#","PHP","Phyton"];
  habilitar:boolean = true;

  constructor() { }

  setHabilitar():void {
    this.habilitar=!this.habilitar;
  }

}
