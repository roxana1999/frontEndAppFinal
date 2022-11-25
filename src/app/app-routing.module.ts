import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/clientes/actualizar-cliente/actualizar-cliente.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CrearClienteComponent } from './components/clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';
import { ActualizarProductoComponent } from './components/productos/actualizar-producto/actualizar-producto.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearVentaComponent } from './components/venta-productos/crear-venta/crear-venta.component';
import { VentaProductosComponent } from './components/venta-productos/venta-productos.component';


const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/crearProducto', component: CrearProductoComponent},
  {path: 'productos/actualizarProducto/:codigo', component: ActualizarProductoComponent},
  {path: 'productos/eliminarProducto/:codigo', component: EliminarProductoComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/crearCliente', component: CrearClienteComponent},
  {path: 'clientes/actualizarCliente/:ruc', component: ActualizarClienteComponent},
  {path: 'clientes/eliminarCliente/:ruc', component: EliminarClienteComponent},
  {path: 'ventaProductos', component: VentaProductosComponent},
  {path: 'ventaProductos/crearVenta', component: CrearVentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
