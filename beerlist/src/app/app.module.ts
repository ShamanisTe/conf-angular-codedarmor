import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeersComponent } from './component/beers/beers.component';

import {BeerService} from './beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
