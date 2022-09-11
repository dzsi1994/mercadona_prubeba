import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss'],
})
export class NewCountryComponent implements OnInit {
  countryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    officalLanguage: ['', Validators.required],
    capital: ['', Validators.required],
    population: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  saveCountry() {
    if (this.countryForm.invalid) {
      this.countryForm.markAllAsTouched();
      return;
    }
  }
}
