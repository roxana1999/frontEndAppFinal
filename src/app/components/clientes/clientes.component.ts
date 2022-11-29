import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { formatearNumero } from '../funciones-formateo/formatearNumero';
import { listaClientes } from './listaClientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: Cliente[] = [];
  formatearNumero = formatearNumero;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('listaClientes')==null) 
      localStorage.setItem('listaClientes', JSON.stringify(listaClientes));
    this.listaClientes = JSON.parse(localStorage.getItem('listaClientes')!);
  }
}
