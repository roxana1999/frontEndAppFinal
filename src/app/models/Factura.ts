import { DatePipe } from "@angular/common";
import { Cliente } from "./cliente";
import { Detalle } from "./Detalle";


const datepipe: DatePipe = new DatePipe('en-US')
export class Factura {
    "id" : number;
    "fecha" : string;
    "numeroFactura": number;
    "cliente": Cliente;
    "total": number;
    "detalles": Detalle[];

    constructor(id: number, fecha: Date, numeroFactura: number, cliente: Cliente, detalles: Detalle[]){
        this.id = id;
        this.fecha = datepipe.transform(fecha, 'YYYY-MM-dd') || '';
        this.numeroFactura = numeroFactura;
        this.cliente = cliente;
        this.detalles = detalles;
        this.total = detalles.reduce((suma, detalle) => suma + detalle.totalDetalle, 0);
    }

}