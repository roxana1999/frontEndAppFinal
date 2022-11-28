import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Detalle } from 'src/app/models/Detalle';
import { Factura } from 'src/app/models/Factura';
import { obtenerListaFacturas } from '../factura/funciones/obtenerListaFacturas';
import { formatearNumero } from '../funciones-formateo/formatearNumero';
import { formatFecha } from '../funciones-formateo/formatFecha';
import { formatFechaDMY } from '../funciones-formateo/formatFechaDMY';
import { formatFechaString } from '../funciones-formateo/formatFechaString';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  listaFacturas: Factura[] = [];
  inicio!: string;
  fin!: string;
  nombreProducto?: string;
  formatFecha = formatFecha;
  formatFechaDMY = formatFechaDMY;
  formatearNumero = formatearNumero;
  formatFechaString = formatFechaString;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.listaFacturas = obtenerListaFacturas();
  }

  filtrar(){
    this.inicio  = this.formatFecha(this.range.value.start);
    this.fin  = this.formatFecha(this.range.value.end);
    
    this.listaFacturas = obtenerListaFacturas();
    
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
      this.listaFacturas.forEach(
        factura => {
          factura.detalles = factura.detalles.filter(detalle => detalle.producto.nombre.toLowerCase()
          .includes(this.nombreProducto!.toLowerCase()))
        }
      );
    }
  }

  clear(){
    this.listaFacturas = obtenerListaFacturas();
    this.nombreProducto = '';
    this.range.value.start = null;
    this.range.value.end = null;
  }
}
