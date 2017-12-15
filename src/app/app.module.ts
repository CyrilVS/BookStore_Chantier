import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { WidgetsModule } from './core/widgets/widgets.module';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './core/services/services.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    WidgetsModule,
    ServicesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
