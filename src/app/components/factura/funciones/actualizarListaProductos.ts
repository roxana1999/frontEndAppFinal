import { Detalle } from "src/app/models/Detalle";
import { Producto } from "src/app/models/producto";

export function actualizarListaProductos(detalles: Detalle[], listaProductos: Producto[]){
    for(const detalle of detalles){
        let index = listaProductos.findIndex( producto => producto == detalle.producto);
        listaProductos[index].existencia -= detalle.cantidad;
    }
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}