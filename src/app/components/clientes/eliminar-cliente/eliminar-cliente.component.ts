import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { obtenerListaClientes } from '../funciones/obtenerLIstaClientes';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {
  ruc!: number;
  listaClientes: Cliente[] = [];
  cliente!: Cliente;
  index!: number;
  success!: boolean;
  error!: boolean;
  mensaje!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruc = this.route.snapshot.params['ruc'];
    this.listaClientes = obtenerListaClientes();
    this.index = this.listaClientes.findIndex(cliente => cliente.ruc == this.ruc)
    if (this.index!=-1) this.cliente = this.listaClientes[this.index];
    else this.error= true; this.mensaje="El ruc no existe.";
  }

  eliminarCliente(){
    this.listaClientes.splice(this.index,1);
    localStorage.setItem('listaClientes',JSON.stringify(this.listaClientes));
    this.success=true; this.mensaje="Cliente eliminado exitosamente."
  }

}
