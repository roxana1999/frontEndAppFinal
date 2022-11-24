import { Producto } from 'src/app/models/producto';

export function evaluarInputsProducto(producto: Producto): [boolean, string] {
  let warning = false;
  let mensaje = '';
  if (producto.nombre == '')
    mensaje = 'El nombre del producto no puede estar vacío.';
  else if (typeof producto.precioDeVenta != 'number' || isNaN(producto.precioDeVenta))
    mensaje = 'El precio de venta del producto debe ser numérico.';
  else if (producto.precioDeVenta <= 0)
    mensaje = 'El precio de venta del producto debe ser mayor a 0.';
  else if (typeof producto.existencia != 'number' || isNaN(producto.existencia))
    mensaje = 'La existencia del producto debe ser numérica.';
  else if (producto.existencia < 0)
    mensaje = 'La existencia del producto debe ser mayor o igual a 0.';
  if (mensaje != '') warning = true;
  if (!warning) {
    producto.precioDeVenta = Math.ceil(producto.precioDeVenta);
    producto.existencia = Math.ceil(producto.existencia);
  }
  return [warning, mensaje];
}
