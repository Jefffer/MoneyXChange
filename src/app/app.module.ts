import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

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
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
