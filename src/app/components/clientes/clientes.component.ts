import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { CLIENTES } from 'src/app/models/clientes.json'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  
  clientes:Cliente[];

  constructor() { }

  ngOnInit() {
    this.clientes = CLIENTES;
  }

}
