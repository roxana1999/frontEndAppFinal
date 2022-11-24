import { listaClientes } from "../listaClientes";

export function obtenerListaClientes(){
    if (localStorage.getItem('listaClientes')==null) 
        localStorage.setItem('listaClientes', JSON.stringify(listaClientes));
    return JSON.parse(localStorage.getItem('listaClientes')!);
}