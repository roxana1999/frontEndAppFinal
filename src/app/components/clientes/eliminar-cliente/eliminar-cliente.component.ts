import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {
  ruc!: number;
  listaClientes: Cliente[] = [];
  success!: boolean;
  mensaje!: string;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruc = this.route.snapshot.params['ruc'];
    this.listaClientes = JSON.parse(localStorage.getItem('listaClientes')!);
    this.cliente = this.listaClientes.find(cliente => cliente.ruc == this.ruc)!;
  }

  eliminarCliente(){
    this.listaClientes = this.listaClientes.filter(cliente => cliente.ruc != this.ruc);
    localStorage.setItem('listaClientes',JSON.stringify(this.listaClientes));
    this.success=true; this.mensaje="Cliente eliminado exitosamente."
  }

}
