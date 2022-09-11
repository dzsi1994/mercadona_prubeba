import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  countryForm: FormGroup = this.countryService.generateCountryForm();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
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

  updateCountry() {
    this.countryService.openSnackBar('Country successfully updated!');
    this.router.navigate(['/country']);
  }
}
