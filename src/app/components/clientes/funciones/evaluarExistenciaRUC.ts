import { Cliente } from 'src/app/models/cliente';

export function evaluarExistenciaRUC( ruc: number, listaClientes: Cliente[]): [boolean, string] {
  let mensaje = '';
  let warning = false;
  let index = listaClientes.findIndex(cliente => cliente.ruc == ruc);
  if (index!= -1)
    warning = true; mensaje = 'Este RUC ya ha sido registrado.';
  return [warning, mensaje];
}