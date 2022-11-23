import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { encontrarProducto } from '../funciones/encontrarProducto';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  index!: number;
  listaProductos: Producto[] = [];
  success: boolean = false;
  mensaje: string = "";
  producto!: Producto;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let codigo = this.route.snapshot.params['codigo'];
    this.listaProductos = JSON.parse(localStorage.getItem('listaProductos')!);
    [this.producto, this.index] = encontrarProducto(this.listaProductos, codigo);
  }

  eliminarProducto(){
    this.listaProductos.splice(this.index,1); //elimina el producto que se encuentra en el índice 'index'
    localStorage.setItem('listaProductos',JSON.stringify(this.listaProductos));
    this.success=true; this.mensaje="Producto eliminado exitosamente.";
    return;
  }

}
