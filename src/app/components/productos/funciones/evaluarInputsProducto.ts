import { Producto } from 'src/app/models/producto';

export function evaluarInputsProducto(producto: Producto): [boolean, string] {
  let warning = false;
  let mensaje = '';
  if (producto.nombre == '')
    mensaje = 'El nombre del producto no puede estar vacío.';
  else if (typeof producto.precioDeVenta != 'number')
    mensaje = 'El precio de venta del producto debe ser numérico.';
  else if (producto.precioDeVenta == 0)
    mensaje = 'El precio de venta del producto no puede ser cero.';
  else if (typeof producto.existencia != 'number')
    mensaje = 'La existencia del producto debe ser numérica.';
  if (mensaje != '') warning = true;
  if (!warning) {
    producto.precioDeVenta = Math.ceil(Math.abs(producto.precioDeVenta));
    producto.existencia = Math.ceil(Math.abs(producto.existencia));
  }
  return [warning, mensaje];
}
