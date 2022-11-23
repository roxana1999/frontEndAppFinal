import { Cliente } from 'src/app/models/cliente';

export function evaluarInputsCliente(cliente: Cliente, listaClientes: Cliente[]): [boolean, string] {
  let mensaje = '';
  let warning = false;
  if (isNaN(cliente.ruc) || typeof cliente.ruc != 'number')
    mensaje = 'El RUC debe ser numérico.';
  else if (cliente.nombreApellido == '')
    mensaje = 'Por favor, ingrese nombre/s y apellido/s del cliente.';
  else if ((cliente.email == ''))
    mensaje = 'Por favor, ingrese el email del cliente.';
  else {
    for (const c of listaClientes) {
      if (c.ruc == cliente.ruc) mensaje = 'Este RUC ya ha sido registrado.';
    }
  }
  if (mensaje != '') warning = true;
  if (!warning)
    cliente.ruc = Math.ceil(Math.abs(cliente.ruc!));
  return [warning, mensaje];
}
