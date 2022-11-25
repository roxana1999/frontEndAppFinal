import { Cliente } from "./cliente";
import { Detalle } from "./Detalle";

export class Factura {
    "id" : number;
    "fecha" : Date;
    "numeroFactura": number;
    "cliente": Cliente;
    "total": number;
    "detalles": Detalle[];

    constructor(id: number, fecha: Date, numeroFactura: number, cliente: Cliente, detalles: Detalle[]){
        this.id = id;
        this.fecha = fecha;
        this.numeroFactura = numeroFactura;
        this.cliente = cliente;
        this.detalles = detalles;
        this.total = detalles.reduce((suma, detalle) => suma + detalle.totalDetalle, 0);
    }

}