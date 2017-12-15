import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
    {path: '', pathMatch: 'full', redirectTo: 'catalog'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
