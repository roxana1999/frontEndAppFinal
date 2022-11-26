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
    this.success=true;
  }


  agregarDetalle(): void{
    let detalle = new Detalle(this.producto, this.options.value.cantidad || 0);
    let flagAgregaMismoProducto = false;
    this.detalles.map((detail) => {
      if(detail.producto.nombre == detalle.producto.nombre){
        detail.cantidad += detalle.cantidad;
        detail.totalDetalle += detalle.producto.precioDeVenta * detalle.cantidad;
        flagAgregaMismoProducto = true;
      }
    })
    if(!flagAgregaMismoProducto)this.detalles.push(detalle);

    this.totalFactura = this.detalles.reduce((suma, detalle) => suma + detalle.totalDetalle,0);
  }

  eliminarDetalle(): void{

  }


}
