import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { FormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './components/productos/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CrearClienteComponent } from './components/clientes/crear-cliente/crear-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    ClientesComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
