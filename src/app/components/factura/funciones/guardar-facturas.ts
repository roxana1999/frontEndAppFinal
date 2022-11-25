import { Factura } from "src/app/models/Factura"

export function saveFacturas(facturas: Factura[]): void {
    localStorage.setItem('listaFacturas', JSON.stringify(facturas));
}