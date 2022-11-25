import { Component, OnInit } from '@angular/core';
import { VentaProductos } from 'src/app/models/ventaProductos';
import { obtenerListaVentas } from './funciones/obtenerListaVentas';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent implements OnInit {
  listaVentas : VentaProductos[] = [];
  filtroRUC!: number;

  constructor() { }

  ngOnInit(): void {
    this.listaVentas = obtenerListaVentas();
    console.log(this.listaVentas);
  }

  filtrarVentas(){
    this.listaVentas = obtenerListaVentas();
    if (this.filtroRUC != undefined && this.filtroRUC.toString() != "")
      this.listaVentas = this.listaVentas.filter( venta => venta.cabecera.cliente.ruc == this.filtroRUC);    
    console.log(typeof this.filtroRUC);
    console.log(this.filtroRUC);
  }

}
