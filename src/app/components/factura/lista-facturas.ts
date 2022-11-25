import { Factura } from "src/app/models/Factura";
import { listaClientes } from "../clientes/listaClientes";
import { detalles } from "./detalles";
export const listaFacturas: Factura[] = [
    new Factura(1,new Date(), 1000, listaClientes[0], detalles),
    new Factura(2,new Date('2021/10/11'), 1001, listaClientes[1], detalles),
    new Factura(3,new Date('2020/05/16'), 1002, listaClientes[2], detalles),

];