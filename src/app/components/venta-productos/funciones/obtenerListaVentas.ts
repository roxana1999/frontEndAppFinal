import { VentaProductos } from "src/app/models/ventaProductos";
import { listaVentaProductos } from "../listaVentaProductos";

export function obtenerListaVentas() : VentaProductos[] {
  if (localStorage.getItem('listaVentas') == null)
    localStorage.setItem('listaVentas', JSON.stringify(listaVentaProductos));
  return JSON.parse(localStorage.getItem('listaVentas')!);
}