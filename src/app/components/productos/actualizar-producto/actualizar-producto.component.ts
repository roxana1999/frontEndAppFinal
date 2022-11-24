import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';
import { evaluarInputsProducto } from '../funciones/evaluarInputsProducto';
import { obtenerListaProductos } from '../funciones/obtenerListaProductos';

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
  error!: boolean;
  warning!: boolean;
  mensaje!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let codigo = this.route.snapshot.params['codigo'];
    this.listaProductos = obtenerListaProductos();
    this.index = this.listaProductos.findIndex( producto => producto.codigo == codigo);
    if (this.index != -1) this.producto = this.listaProductos[this.index];
    else this.error= true; this.mensaje="El ruc no existe.";
  }

  actualizarProducto(){
    this.warning = false;
    [this.warning, this.mensaje] = evaluarInputsProducto(this.producto);
    if (!this.warning){
      localStorage.setItem('listaProductos', JSON.stringify(this.listaProductos));
      this.success = true; this.mensaje = 'Producto actualizado exitosamente.';
    }
    return;
  }
}
