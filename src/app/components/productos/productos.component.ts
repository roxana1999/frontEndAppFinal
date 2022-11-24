import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { obtenerListaProductos } from './funciones/obtenerListaProductos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  listaProductos : Producto[] = [];
  constructor() {}
  
  ngOnInit(): void {
    this.listaProductos = obtenerListaProductos();
  }
}
