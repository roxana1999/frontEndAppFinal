import { Component, OnInit } from '@angular/core';
import { VentaProductos } from 'src/app/models/ventaProductos';
import { obtenerListaClientes } from '../../clientes/funciones/obtenerListaClientes';
import { obtenerListaVentas } from '../funciones/obtenerListaVentas';


@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  ruc!: number;
  fecha!: Date;
  listaVentas!: VentaProductos[];
  ventaProductos!: VentaProductos;
  success!: boolean;
  warning!: boolean;
  mensaje!: string;
  
  constructor() { }

  ngOnInit(): void {
    this.ventaProductos = new VentaProductos();
    this.listaVentas = obtenerListaVentas();
  }

  obtenerCliente(){
    this.warning = false;
    console.log("El tipo de dato es:")
    console.log(typeof this.ruc)
    console.log(this.ruc)
    let listaClientes = obtenerListaClientes();
    console.log(listaClientes)
    let index = listaClientes.findIndex( cliente => cliente.ruc == this.ruc);
    console.log("index es",index)
    if (index==-1){
      this.warning = true; this.mensaje = "No se ha encontrado el ruc.";
    }
    else{
      console.log(listaClientes[index])
      this.ventaProductos.cabecera.cliente = listaClientes[index];
    }
  }

  generarVenta(){
    this.warning = false;
    //ToDO: Verificar valores
    if (this.ventaProductos.cabecera.cliente.nombreApellido=="")
    {
      this.warning = true;
      this.mensaje = "Por favor, ingrese el ruc del cliente."
    }
    else {
      this.listaVentas.push(this.ventaProductos);
      localStorage.setItem('listaVentas', JSON.stringify(this.listaVentas));
      this.success=true; this.mensaje="Exitosamente dudoso";
    }
  }
}
