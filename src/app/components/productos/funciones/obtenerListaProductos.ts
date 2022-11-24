import { Producto } from "src/app/models/producto";
import { listaProductos } from "../listaProductos";

export function obtenerListaProductos() : Producto[] {
  if (localStorage.getItem('listaProductos')==null) 
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
  return JSON.parse(localStorage.getItem('listaProductos')!);
}