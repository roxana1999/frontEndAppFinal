import { Cliente } from 'src/app/models/cliente';

export function evaluarInputsCliente(cliente: Cliente): [boolean, string] {
  let mensaje = '';
  let warning = false;
  if (isNaN(cliente.ruc) || typeof cliente.ruc != 'number')
    mensaje = 'El RUC debe ser numérico.';
  else if (cliente.nombreApellido == '')
    mensaje = 'Por favor, ingrese nombre/s y apellido/s del cliente.';
  else if ((cliente.email == ''))
    mensaje = 'Por favor, ingrese el email del cliente.';
  if (mensaje != '') warning = true;
  if (!warning)
    cliente.ruc = Math.ceil(Math.abs(cliente.ruc!)); //Corregir números negativos o decimales
  return [warning, mensaje];
}
