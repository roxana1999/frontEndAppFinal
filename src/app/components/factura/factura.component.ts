import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import { listaFacturas } from './lista-facturas';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  listaFacturas: Factura[] = [];

  ngOnInit(): void {
    if (localStorage.getItem('listaFacturas')==null) 
      localStorage.setItem('listaFacturas', JSON.stringify(listaFacturas));
    this.listaFacturas = JSON.parse(localStorage.getItem('listaFacturas')!);
  }


}
