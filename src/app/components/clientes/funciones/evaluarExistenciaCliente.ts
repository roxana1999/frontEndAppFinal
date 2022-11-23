import { Cliente } from 'src/app/models/cliente';

export function evaluarExistenciaCliente( cliente: Cliente, listaClientes: Cliente[]): [boolean, string] {
  let mensaje = '';
  let warning = false;
  for (const c of listaClientes)
    if (c.ruc == cliente.ruc) {
        warning = true;
        mensaje = 'Este RUC ya ha sido registrado.'; 
    }
  if (!warning) cliente.ruc = Math.ceil(Math.abs(cliente.ruc!));
  return [warning, mensaje];
}