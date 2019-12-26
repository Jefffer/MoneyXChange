import { Injectable } from '@angular/core';
import { Conversion } from './conversion.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  formData : Conversion;

  constructor() { }
}
