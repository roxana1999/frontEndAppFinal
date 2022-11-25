import { Producto } from "./producto";

export class Detalle {
    "producto": Producto;
    "cantidad": number;
    "totalDetalle" : number;

    constructor (producto: Producto, cantidad: number){
        this.producto = producto;
        this.cantidad = cantidad;
        this.totalDetalle = producto.precioDeVenta * cantidad;
    }
}