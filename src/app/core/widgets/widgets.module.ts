import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { RouterModule } from '@angular/router';
import { BuyButtonComponent } from './buy-button/buy-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent, SmallCartComponent, BuyButtonComponent],
  exports: [MenuComponent, SmallCartComponent, BuyButtonComponent]
})
export class WidgetsModule { }
