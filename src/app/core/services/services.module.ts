import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from './action.service';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ActionService, CartService]
})
export class ServicesModule { }
