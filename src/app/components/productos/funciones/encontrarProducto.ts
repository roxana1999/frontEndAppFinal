import { Producto } from "src/app/models/producto";

export function encontrarProducto(listaProductos: Producto[], codigo: number): [Producto, number]{
    let producto = listaProductos.find(element => element.codigo == codigo)!;
    let index = listaProductos.indexOf(producto);
    return [producto, index];
}
