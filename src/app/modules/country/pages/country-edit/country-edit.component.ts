import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Country } from '@models/*';
import { filter, switchMap } from 'rxjs';
import { CountryService } from '../../services';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.scss'],
})
export class CountryEditComponent implements OnInit {
  countryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    officalLanguage: ['', Validators.required],
    capital: ['', Validators.required],
    population: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        filter((params: ParamMap) => !!params.get('countryId')),
        switchMap((params: ParamMap) =>
          this.countryService.getCountryDetails(params.get('countryId') ?? '')
        )
      )
      .subscribe((country: Country) => this.setFormValues(country));
  }

  setFormValues(country: Country) {
    this.countryForm.setValue({
      name: country.name.common,
      officalLanguage: this.getLanguage(country.languages),
      capital: country.capital,
      population: country.population,
    });
  }

  getLanguage(language: Object | undefined) {
    if (!language) {
      return '';
    }
    return Object.values(language)[0];
  }

  saveCountry() {
    this._snackBar.open('Successfully updated', 'Close', {
      duration: 4000,
    });
    this.router.navigate(['/country']);
  }
}
