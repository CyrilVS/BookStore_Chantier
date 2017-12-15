import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SmallCartComponent } from './small-cart/small-cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, SmallCartComponent],
  exports: [MenuComponent, SmallCartComponent]
})
export class WidgetsModule { }
