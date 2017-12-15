import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartRootComponent } from './cart-root/cart-root.component';
import { CartContentComponent } from './cart-content/cart-content.component';

const routes: Routes = [
  {
    path: '',
    component: CartRootComponent,
    children: [
      {
        path: 'content',
        component: CartContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
