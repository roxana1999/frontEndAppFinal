import { Detalle } from "src/app/models/Detalle";
import { obtenerListaFacturas } from "./obtenerListaFacturas";

export function obtenerListaDetalles(id:number) : Detalle[] {
    let factura;
    let detalles : Detalle[];
    let listaFacturas = obtenerListaFacturas();
    let index = listaFacturas.findIndex(factura => factura.id == id);
    if (index!=-1) {
      factura = listaFacturas[index]; 
      detalles = factura.detalles;
    } else detalles = [];
    return detalles;
}