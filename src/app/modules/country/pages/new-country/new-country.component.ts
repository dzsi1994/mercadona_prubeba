import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../../services';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss'],
})
export class NewCountryComponent implements OnInit {
  countryForm: FormGroup = this.countryService.generateCountryForm();

  constructor(private router: Router, private countryService: CountryService) {}

  ngOnInit(): void {}
  saveCountry() {
    if (this.countryForm.invalid) {
      this.countryForm.markAllAsTouched();
      return;
    }
  }
}
