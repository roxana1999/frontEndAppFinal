import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { obtenerListaFacturas } from './funciones/obtenerListaFacturas';

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

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.listaFacturas = obtenerListaFacturas();
  }

  datepipe: DatePipe = new DatePipe('en-US')

  formatFecha(date: Date | null | undefined): string{
    if(date != null && date != undefined){
      return this.datepipe.transform(date, 'dd-MM-YYYY') || '';
    }
    else return '';
  }


  filtrar(){
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
