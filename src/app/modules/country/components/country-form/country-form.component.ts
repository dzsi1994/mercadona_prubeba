import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  countryForm!: FormGroup = this.fb.group({
    name: ['', Validators.required],
    officalLanguage: ['', Validators.required],
    capital: ['', Validators.required],
    population: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
