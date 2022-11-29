import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { obtenerListaFacturas } from './funciones/obtenerListaFacturas';
import { formatearNumero } from '../funciones-formateo/formatearNumero';
import { formatFecha } from '../funciones-formateo/formatFecha';
import { formatFechaDMY } from '../funciones-formateo/formatFechaDMY';
import { formatFechaString } from '../funciones-formateo/formatFechaString';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  listaFacturas: Factura[] = [];
  inicio!: string;
  fin!: string;
  nombreCliente?: string;
  formatFecha = formatFecha;
  formatFechaDMY = formatFechaDMY;
  formatFechaString = formatFechaString;
  formatearNumero = formatearNumero;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.listaFacturas = obtenerListaFacturas();
  }

  filtrar(){
    this.listaFacturas = obtenerListaFacturas();
    this.inicio  = this.formatFecha(this.range.value.start);
    this.fin  = this.formatFecha(this.range.value.end);

    console.log(this.listaFacturas);
    
    if(this.inicio != '' && this.inicio != undefined ){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.fecha >= this.inicio);      
    }
    console.log(this.listaFacturas);

    if(this.fin != '' && this.fin != undefined ){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.fecha <= this.fin);      
    }
    console.log(this.listaFacturas);

    if(this.nombreCliente != '' && this.nombreCliente != null && this.nombreCliente != undefined){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.cliente.nombreApellido.toLowerCase().includes(this.nombreCliente!));
    }
    console.log(this.listaFacturas);
    
  }

  clear(){
    this.listaFacturas = JSON.parse(localStorage.getItem('listaFacturas')!);
    this.nombreCliente = '';
    this.range.value.start = null;
    this.range.value.end = null;
  }

}
