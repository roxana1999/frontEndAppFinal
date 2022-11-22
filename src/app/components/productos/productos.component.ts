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
  ultimoId = listaProductos.length;
  constructor() {}
  
  ngOnInit(): void {
    this.listaProductos = JSON.parse(localStorage.getItem('listaProductos')!);
  }
}
