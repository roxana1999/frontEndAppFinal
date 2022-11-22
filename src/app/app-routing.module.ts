import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/productos/crear-producto/crear-producto.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/crearProducto', component: CrearProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
