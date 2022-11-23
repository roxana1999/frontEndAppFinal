import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { listaProductos } from './listaProductos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  listaProductos : Producto[] = [];
  constructor() {}
  
  ngOnInit(): void {
    if (localStorage.getItem('listaProductos')==null) 
      localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
    this.listaProductos = JSON.parse(localStorage.getItem('listaProductos')!);
  }
}
