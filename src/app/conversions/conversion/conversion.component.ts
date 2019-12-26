import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/shared/conversion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor(private service : ConversionService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      fromConversion: null,
      toConversion: null,
      fromValue: null,
      toValue: null,
      user: null
    };
  }

}
