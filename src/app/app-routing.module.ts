import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './components/productos/actualizar-producto/actualizar-producto.component';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './components/productos/eliminar-producto/eliminar-producto.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/crearProducto', component: CrearProductoComponent},
  {path: 'productos/actualizarProducto/:codigo', component: ActualizarProductoComponent},
  {path: 'productos/eliminarProducto/:codigo', component: EliminarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
