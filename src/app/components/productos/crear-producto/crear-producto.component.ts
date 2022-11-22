import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  listaProductos: Producto[] = JSON.parse(localStorage.getItem('listaProductos')!);
  siguienteID = this.listaProductos[this.listaProductos.length-1].codigo+1;
  producto : Producto = new Producto(this.siguienteID, "", 1, 1);
  success: boolean = false;
  warning: boolean = false;
  mensaje: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.warning = false;
    if (this.producto.nombre==""){
      this.warning=true; this.mensaje='El nombre del producto no puede estar vacío.';
      return;
    }
    if ((typeof this.producto.precioDeVenta)!='number'){
      this.warning=true; this.mensaje='El precio de venta del producto debe ser numérico.';
      return;
    }
    if (this.producto.precioDeVenta==0){
      this.warning=true; this.mensaje='El precio de venta del producto no puede ser cero.';
      return;
    }
    if ((typeof this.producto.existencia)!='number'){
      this.warning=true; this.mensaje='La existencia del producto debe ser numérica.';
      return;
    }
    this.producto.precioDeVenta= Math.ceil(Math.abs(this.producto.precioDeVenta));
    this.producto.existencia= Math.ceil(Math.abs(this.producto.existencia));
    this.listaProductos.push(this.producto);
    localStorage.setItem('listaProductos', JSON.stringify(this.listaProductos));
    this.success= true; this.mensaje= 'Producto creado exitosamente';
    return;
  }
}
