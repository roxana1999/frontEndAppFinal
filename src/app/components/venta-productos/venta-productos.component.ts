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

  constructor() { }

  ngOnInit(): void {
    this.listaVentas = obtenerListaVentas();
    console.log(this.listaVentas);
  }

}
