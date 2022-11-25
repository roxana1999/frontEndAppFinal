import { obtenerListaVentas } from '../components/venta-productos/funciones/obtenerListaVentas';
import { Cliente } from './cliente';
import { Producto } from './producto';

export class VentaProductos {
  cabecera!: {
    id: number;
    fecha: Date;
    numeroFactura: string;
    cliente: Cliente;
    total: number;
  };
  detalles: DetalleProducto[] = [];

  constructor() {
    let siguienteID = obtenerListaVentas().length + 1;
    this.cabecera = {
      id: siguienteID,
      numeroFactura: '001-001-' + obtenerString(siguienteID),
      fecha: new Date(Date.now()),
      total: 0,
      cliente: new Cliente(NaN, '', ''),
    };
  }
}

export class DetalleProducto {
  producto!: Producto;
  cantidad!: number;
  totalDetalle!: number;
}

function obtenerString(n: number) {
  let numero = n.toString();
  while (numero.length < 7) numero = '0' + numero;
  return numero;
}