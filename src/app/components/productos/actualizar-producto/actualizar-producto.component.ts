import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';
import { evaluarInputsProducto } from '../funciones/evaluarInputsProducto';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  codigo!: number;
  index!: number;
  listaProductos: Producto[] = [];
  success!: boolean;
  warning!: boolean;
  mensaje!: string;
  producto!: Producto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['codigo'];
    this.listaProductos = JSON.parse(localStorage.getItem('listaProductos')!);
    this.producto = this.listaProductos.find(element => element.codigo == this.codigo)!;
    this.index = this.listaProductos.indexOf(this.producto);
    console.log("produto",this.producto);
    console.log("index",this.index);
  }

  actualizarProducto(){
    this.warning = false;
    [this.warning, this.mensaje] = evaluarInputsProducto(this.producto);
    if (!this.warning){
      this.listaProductos[this.index] = this.producto;
      localStorage.setItem('listaProductos', JSON.stringify(this.listaProductos));
      this.success= true; this.mensaje= 'Producto actualizado exitosamente';
      return;
    }
  }

}
