import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { evaluarInputsProducto } from '../funciones/evaluarInputsProducto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  listaProductos: Producto[] = JSON.parse(localStorage.getItem('listaProductos')!);
  siguienteID = this.listaProductos[this.listaProductos.length-1].codigo+1;
  producto : Producto = new Producto(this.siguienteID, "", 1, 1);
  success!: boolean;
  warning!: boolean;
  mensaje!: string;

  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.warning = false;
    [this.warning, this.mensaje] = evaluarInputsProducto(this.producto);
    if (!this.warning){
      this.listaProductos.push(this.producto);
      localStorage.setItem('listaProductos', JSON.stringify(this.listaProductos));
      this.success= true; this.mensaje= 'Producto creado exitosamente.';
    }
    return;
  }

 
}
