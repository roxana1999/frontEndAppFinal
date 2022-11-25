import { Detalle } from "src/app/models/Detalle";
import { listaProductos } from "../productos/listaProductos";

export const detalles: Detalle[] = [
    new Detalle(listaProductos[0], 2),
    new Detalle(listaProductos[1], 1),
    new Detalle(listaProductos[2], 3),
]