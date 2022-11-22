export class Producto {
    "codigo": number;
    "nombre": string;
    "precioDeVenta": number;
    "existencia" : number;

    constructor(codigo: number, nombre: string, precioDeVenta: number, existencia: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioDeVenta = precioDeVenta;
        this.existencia = existencia;
    }
}