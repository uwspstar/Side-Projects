import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockRepository } from 'src/repository/stock';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
