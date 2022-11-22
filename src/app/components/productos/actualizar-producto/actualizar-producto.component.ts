import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  codigo!: number;
  index!: number;
  listaProductos: Producto[] = [];
  success: boolean = false;
  warning: boolean = false;
  mensaje: string = "";
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
    this.listaProductos[this.index] = this.producto;
    localStorage.setItem('listaProductos', JSON.stringify(this.listaProductos));
    this.success= true; this.mensaje= 'Producto actualizado exitosamente';
    return;
  }

}
