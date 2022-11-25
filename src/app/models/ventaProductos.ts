import { Cliente } from "./cliente";
import { Producto } from "./producto";

export class VentaProductos {
  static siguienteID: number;

  cabecera!: {
    id: number;
    fecha: Date;
    numeroFactura: number;
    cliente: Cliente;
    total: number;
    };

    detalles: Detalle[] = [];

    constructor(){
      if (VentaProductos.siguienteID==null) VentaProductos.siguienteID=1;
      this.cabecera = {
        id : VentaProductos.siguienteID,
        numeroFactura: VentaProductos.siguienteID,
        fecha: new Date(Date.now()),
        total : 0,
        cliente: new Cliente(NaN, "", "")
      }
    }
}

export class Detalle {
    producto!: Producto;
    cantidad!: number;
    totalDetalle!: number;
}