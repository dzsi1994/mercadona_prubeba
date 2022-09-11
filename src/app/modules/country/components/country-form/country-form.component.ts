import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  isUpdating = false;
  countryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    officalLanguage: ['', Validators.required],
    capital: ['', Validators.required],
    population: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  saveCountry(): void {
    this.isUpdating = true;
    if (this.countryForm.invalid) {
      this.countryForm.markAllAsTouched();
      return;
    }
  }

  // formValidator(name: string, errorCode: string = ''): boolean {
  //   if (errorCode === '') {
  //     return (
  //       this.countryForm?.get(`${name}`)?.hasError('required') &&
  //       this.countryForm?.get(`${name}`)?.touched
  //     );
  //   } else {
  //     return (
  //       this.countryForm.get(`${name}`).hasError(`${errorCode}`) &&
  //       this.countryForm.get(`${name}`).dirty &&
  //       !this.formValidator(`${name}`)
  //     );
  //   }
  // }
}
