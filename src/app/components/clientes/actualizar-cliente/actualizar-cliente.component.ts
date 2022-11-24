import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { evaluarInputsCliente } from '../funciones/evaluarInputsCliente';
import { obtenerListaClientes } from '../funciones/obtenerLIstaClientes';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  listaClientes: Cliente[] = [];
  cliente!: Cliente;
  index!: number;
  warning!: boolean;
  success!: boolean;
  error!: boolean;
  mensaje!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let ruc = this.route.snapshot.params['ruc'];
    this.listaClientes = obtenerListaClientes();
    this.index = this.listaClientes.findIndex(cliente => cliente.ruc == ruc);
    if (this.index!=-1) this.cliente = this.listaClientes[this.index]; 
    else this.error= true; this.mensaje="El ruc no existe.";
  }

  actualizarCliente(){
    this.warning = false;
    [this.warning, this.mensaje] = evaluarInputsCliente(this.cliente);
    if (!this.warning){
      localStorage.setItem('listaClientes', JSON.stringify(this.listaClientes)); 
      this.success= true; this.mensaje = "Cliente actualizado exitosamente." 
    }
    return;
  }

}
