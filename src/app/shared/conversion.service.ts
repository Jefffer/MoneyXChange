import { Injectable } from '@angular/core';
import { Conversion } from './conversion.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  formData: Conversion;
  readonly rootUrl = 'http://localhost:56409/api'; // API connection

  constructor(private http: HttpClient) { }

  postConversion(formData: Conversion){
    var a = this.http.post(this.rootUrl + '/Conversions', formData);
    
    return a;
  }

}
