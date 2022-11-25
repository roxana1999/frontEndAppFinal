import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import { listaFacturas } from './lista-facturas';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  listaFacturas: Factura[] = [];

  inicio?: Date | null;
  fin?: Date | null;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    if (localStorage.getItem('listaFacturas')==null) 
      localStorage.setItem('listaFacturas', JSON.stringify(listaFacturas));
    this.listaFacturas = JSON.parse(localStorage.getItem('listaFacturas')!);
  }


}
