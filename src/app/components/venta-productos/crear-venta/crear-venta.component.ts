import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { VentaProductos } from 'src/app/models/ventaProductos';
import { obtenerListaClientes } from '../../clientes/funciones/obtenerListaClientes';
import { listaVentaProductos } from '../listaVentaProductos';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  cliente!: Cliente;
  ruc!: number;
  fecha!: Date;
  ventaProductos!: VentaProductos;
  success!: boolean;
  warning!: boolean;
  mensaje!: string;
  
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('listaVentaProductos') == null)
      localStorage.setItem('listaVentaProductos', JSON.stringify(listaVentaProductos));
    this.ventaProductos = new VentaProductos();
  }

  obtenerCliente(){
    console.log("El tipo de dato es:")
    console.log(typeof this.ruc)
    console.log(this.ruc)
    let listaClientes = obtenerListaClientes();
    console.log(listaClientes)
    let index = listaClientes.findIndex( cliente => cliente.ruc == this.ruc);
    console.log("index es",index)
    if (index==-1){
      this.warning = true; this.mensaje = "No se ha encontrado el ruc";
    }
    else{
      console.log(listaClientes[index])
      this.ventaProductos.cabecera.cliente = listaClientes[index];
      console.log(this.cliente);
    }
  }
}
