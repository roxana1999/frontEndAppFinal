import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Detalle } from 'src/app/models/Detalle';
import { Factura } from 'src/app/models/Factura';
import { Producto } from 'src/app/models/producto';
import { obtenerListaClientes } from '../../clientes/funciones/obtenerListaClientes';
import { obtenerListaProductos } from '../../productos/funciones/obtenerListaProductos';
import { actualizarListaProductos } from '../funciones/actualizarListaProductos';
import { saveFacturas } from '../funciones/guardar-facturas';
import { obtenerListaFacturas } from '../funciones/obtenerListaFacturas';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  options = this._formBuilder.group(
    {
      cliente: this._formBuilder.control(null),
      producto: this._formBuilder.control(null),
      cantidad: this._formBuilder.control(null),
    }
  );

  warning!: boolean;
  success!: boolean;
  mensaje!: string;

  clienteNombre!: Cliente;
  producto!: Producto;
  clienteNombreControl = new FormControl<string | null>(null, Validators.required);
  productoControl = new FormControl<string | null>(null);
  listaClientes: Cliente[] = [];
  listaProductos: Producto[] = [];
  detalles: Detalle[] = [];
  totalFactura: number = 0;
  cantidadProducto: number = 0;
  fecha: Date = new Date();

  constructor(private _formBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.listaClientes = obtenerListaClientes();
    this.listaProductos = obtenerListaProductos();
  }

  submit(): void{
    let listaFacturas = obtenerListaFacturas();
    let ultimaFactura = listaFacturas[listaFacturas.length  - 1];
    let factura = new Factura(ultimaFactura.id++, new Date(), ultimaFactura.numeroFactura++, this.clienteNombre, this.detalles);
    listaFacturas.push(factura);
    saveFacturas(listaFacturas);
    actualizarListaProductos(this.detalles, this.listaProductos);
    this.success=true; this.mensaje="Se ha registrado correctamente la factura."
  }


  agregarDetalle(): void{
    this.warning = false;
    let detalle = new Detalle(this.producto, this.options.value.cantidad || 0);
    if (detalle.cantidad==0) return;
    let index = this.detalles.findIndex( detail => detail.producto == this.producto)
    if (index==-1){ //Si el producto no se encontró en la lista de Detalles (es nuevo)
      this.verificarInventario(detalle.cantidad, this.producto.existencia)
      if (this.warning) return;
      this.detalles.push(detalle);
    }
    else {
      let detail = this.detalles[index];
      this.verificarInventario(detail.cantidad+detalle.cantidad, this.producto.existencia);
      if (this.warning) return;
      detail.cantidad += detalle.cantidad;
      detail.totalDetalle += detalle.producto.precioDeVenta * detalle.cantidad;
    }
    this.totalFactura = this.detalles.reduce((suma, detalle) => suma + detalle.totalDetalle,0);
  }

  eliminarDetalle(): void{

  }

  verificarInventario(cantidad: number, existencia: number){
    if (cantidad>existencia)
      this.warning=true; this.mensaje='La cantidad a comprar excede a la del inventario.';
  }

}
