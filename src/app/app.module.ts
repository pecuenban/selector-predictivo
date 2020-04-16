import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SelectPredictivoComponent } from './select-predictivo/select-predictivo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SelectPredictivoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
