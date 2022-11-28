import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Detalle } from 'src/app/models/Detalle';
import { Factura } from 'src/app/models/Factura';
import { obtenerListaFacturas } from '../factura/funciones/obtenerListaFacturas';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  listaFacturas: Factura[] = [];
  listaDetalles: Detalle[] = [];
  inicio!: string;
  fin!: string;
  nombreProducto?: string;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.obtenerAllDetalles();

  }

  obtenerAllDetalles(): void {
    this.listaFacturas = obtenerListaFacturas();
    this.listaFacturas.forEach(factura => this.listaDetalles.push(...factura.detalles));
  }

  datepipe: DatePipe = new DatePipe('en-US')

  formatFecha(date: Date | null | undefined): string{
    if(date != null && date != undefined){
      return this.datepipe.transform(date, 'YYYY-MM-dd') || '';
    }
    else return '';
  }

  formatearNumero(num: number): string {
    let aux = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return aux;
  }


  filtrar(){
    this.inicio  = this.formatFecha(this.range.value.start);
    this.fin  = this.formatFecha(this.range.value.end);
    
    this.listaDetalles = [];
    
    if(this.inicio != '' && this.inicio != undefined ){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.fecha >= this.inicio);    
      console.log(this.listaFacturas);
        
    }

    if(this.fin != '' && this.fin != undefined ){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.fecha <= this.fin);
      console.log(this.listaFacturas);

    }

    console.log('====>' , this.listaFacturas);
    

    if(this.nombreProducto != '' && this.nombreProducto != null && this.nombreProducto != undefined){
      this.listaFacturas.forEach(factura => {
        this.listaDetalles.push( ...factura.detalles.filter(detalle => detalle.producto.nombre.toLowerCase().includes(this.nombreProducto!.toLowerCase())))
      });
    } else {
      this.listaFacturas.forEach(factura => this.listaDetalles.push(...factura.detalles));
    }
  }

  clear(){
    this.listaDetalles = [];
    this.obtenerAllDetalles();
    this.nombreProducto = '';
    this.range.value.start = null;
    this.range.value.end = null;
  }
}
