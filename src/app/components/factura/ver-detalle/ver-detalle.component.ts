import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Detalle } from 'src/app/models/Detalle';
import { Factura } from 'src/app/models/Factura';
import { obtenerListaDetalles } from '../funciones/obtenerListaDetalles';
import { obtenerListaFacturas } from '../funciones/obtenerListaFacturas';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit{
  listaFacturas : Factura[] = [];
  factura!: Factura;
  detalles: Detalle[] = [];
  index!: number;
  warning!: boolean;
  success!: boolean;
  error!: boolean;
  mensaje!: string;
  inicio!: string;
  fin!: string;
  nombreProducto?: string;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.listaFacturas = obtenerListaFacturas();
    this.index = this.listaFacturas.findIndex(factura => factura.id == id);
    if (this.index!=-1) {
      this.factura = this.listaFacturas[this.index]; 
      this.detalles = this.factura.detalles;
    }
    else this.error= true; this.mensaje="La factura no existe no existe.";
  }

  
  datepipe: DatePipe = new DatePipe('en-US')

  formatFecha(date: Date | null | undefined): string{
    if(date != null && date != undefined){
      return this.datepipe.transform(date, 'YYYY-MM-dd') || '';
    }
    else return '';
  }


  filtrar(){
    this.inicio  = this.formatFecha(this.range.value.start);
    this.fin  = this.formatFecha(this.range.value.end);

    
    if(this.inicio != '' && this.inicio != undefined ){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.fecha >= this.inicio);      
    }

    if(this.fin != '' && this.fin != undefined ){
      this.listaFacturas = this.listaFacturas.filter(factura => factura.fecha <= this.fin);      
    }

    if(this.nombreProducto != '' && this.nombreProducto != null && this.nombreProducto != undefined){
      this.detalles = this.detalles.filter(detalle => detalle.producto.nombre.toLowerCase().includes(this.nombreProducto!));
    }
    
  }

  clear(){
    this.detalles = obtenerListaDetalles(this.factura.id);
    this.nombreProducto = '';
    this.range.value.start = null;
    this.range.value.end = null;
  }
}
