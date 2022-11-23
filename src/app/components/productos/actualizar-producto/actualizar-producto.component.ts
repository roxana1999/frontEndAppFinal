import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';
import { evaluarInputsProducto } from '../funciones/evaluarInputsProducto';
import { encontrarProducto } from '../funciones/encontrarProducto';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  index!: number;
  listaProductos: Producto[] = [];
  producto!: Producto;
  success!: boolean;
  warning!: boolean;
  mensaje!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let codigo = this.route.snapshot.params['codigo'];
    this.listaProductos = JSON.parse(localStorage.getItem('listaProductos')!);
    [this.producto, this.index] = encontrarProducto(this.listaProductos, codigo);
    // console.log("lista de productos",this.listaProductos);
    // console.log("produto",this.producto);
    // console.log("index",this.index);
  }

  actualizarProducto(){
    this.warning = false;
    [this.warning, this.mensaje] = evaluarInputsProducto(this.producto);
    if (!this.warning){
      this.listaProductos[this.index] = this.producto;
      localStorage.setItem('listaProductos', JSON.stringify(this.listaProductos));
      this.success = true; this.mensaje = 'Producto actualizado exitosamente.';
      return;
    }
  }
}
