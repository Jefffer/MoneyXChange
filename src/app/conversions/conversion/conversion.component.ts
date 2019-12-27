import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/shared/conversion.service';
import { NgForm } from '@angular/forms';
import { Conversion } from 'src/app/shared/conversion.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor(private service: ConversionService,
    private toastr: ToastrService) { }

  // toValue:number = null;
  formValues: any;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      console.log(2);
      console.log(this.formValues);
      console.log(this.formValues.toValue);
      // if (this.formValues.toValue == null){
      //   this.toastr.error('The value exceeds the allowed range.', 'MoneyXchangE');
      // }
      this.service.formData.toValue = this.formValues.toValue;
    } else {
      console.log(3);
      this.service.formData = {
        fromConversion: null,
        toConversion: null,
        fromValue: null,
        toValue: null,
        user: null
      };
    }
  }

  onSubmit(form: NgForm) {
    this.service.postConversion(form.value).toPromise().then(res => {
      this.formValues = res;
      if (this.formValues == null) {
        this.toastr.error('The value exceeds the allowed range.', 'MoneyXchangE');
      }
      else {
        this.toastr.success('Converted successfully. Also saved in Database.', 'MoneyXchangE');
      }
      // console.log(res.value.toValue);
      // this.service.formData = form.value;
      this.resetForm(form);
      // this.toValue = 2;
    });
  }

}
