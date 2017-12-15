import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent, SmallCartComponent],
  exports: [MenuComponent, SmallCartComponent]
})
export class WidgetsModule { }
