import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { ConversionComponent } from './conversions/conversion/conversion.component';
import { ConversionService } from './shared/conversion.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversionsComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
