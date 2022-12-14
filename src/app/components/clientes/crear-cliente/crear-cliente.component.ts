import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { evaluarExistenciaRUC } from '../funciones/evaluarExistenciaRUC';
import { evaluarInputsCliente } from '../funciones/evaluarInputsCliente';
import { obtenerListaClientes } from '../funciones/obtenerListaClientes';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  listaClientes: Cliente[] = [];
  cliente: Cliente = new Cliente(NaN,"","");
  warning!: boolean;
  success!: boolean;
  mensaje!: string;

  constructor() { }

  ngOnInit(): void {
  }

  agregarCliente(){
    this.warning = false;
    this.listaClientes = obtenerListaClientes();
    [this.warning, this.mensaje] = evaluarInputsCliente(this.cliente);
    if (!this.warning)
      [this.warning, this.mensaje] = evaluarExistenciaRUC(this.cliente.ruc, this.listaClientes);
    if (!this.warning){
      this.listaClientes.push(this.cliente);
      localStorage.setItem('listaClientes', JSON.stringify(this.listaClientes));
      this.success = true; this.mensaje= "Cliente creado exitosamente.";
    }
    return;
  }  
}
