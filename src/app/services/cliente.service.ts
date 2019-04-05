import { Injectable } from '@angular/core';
import { CLIENTES } from 'src/app/models/clientes.json';
import { Cliente } from '../models/cliente';
import { of, Observable } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes():Observable<Cliente[]>{
     return of(CLIENTES);
  }
}
