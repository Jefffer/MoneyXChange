import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { ConversionComponent } from './conversions/conversion/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionsComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
