import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { evaluarInputsCliente } from '../funciones/evaluarInputsCliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  cliente: Cliente = new Cliente(NaN,"","");
  listaClientes: Cliente[] = [];
  warning!: boolean;
  success!: boolean;
  mensaje: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarCliente(){
    this.warning = false;
    this.listaClientes = JSON.parse(localStorage.getItem('listaClientes')!);
    [this.warning, this.mensaje] = evaluarInputsCliente(this.cliente, this.listaClientes);
    if (!this.warning){
      this.listaClientes.push(this.cliente);
      localStorage.setItem('listaClientes', JSON.stringify(this.listaClientes));
      this.success = true; this.mensaje= "Cliente creado exitosamente.";
    }
    return;
  }  
}
