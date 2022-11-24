import { Cliente } from "src/app/models/cliente";
import { listaClientes } from "../listaClientes";

export function obtenerListaClientes() : Cliente[] {
    if (localStorage.getItem('listaClientes')==null) 
        localStorage.setItem('listaClientes', JSON.stringify(listaClientes));
    return JSON.parse(localStorage.getItem('listaClientes')!);
}