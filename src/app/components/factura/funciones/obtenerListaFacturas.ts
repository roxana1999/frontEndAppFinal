import { Factura } from "src/app/models/Factura";
import { listaFacturas } from "../lista-facturas";

export function obtenerListaFacturas() : Factura[] {
    if (localStorage.getItem('listaFacturas')==null) 
        localStorage.setItem('listaFacturas', JSON.stringify(listaFacturas));
    return JSON.parse(localStorage.getItem('listaFacturas')!);
}