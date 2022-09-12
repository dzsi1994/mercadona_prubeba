import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Country } from '@models/*';
import { filter, switchMap, tap } from 'rxjs';
import { LanguagePipe } from '../../pipes/language.pipe';
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

  countryId!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private languagePipe: LanguagePipe
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        filter((params: ParamMap) => !!params.get('countryId')),
        tap(
          (params: ParamMap) => (this.countryId = params.get('countryId') ?? '')
        ),
        switchMap((params: ParamMap) =>
          this.countryService.getCountryDetails(params.get('countryId') ?? '')
        )
      )
      .subscribe((country: Country) => {
        this.setFormValues(country);
      });
  }

  setFormValues(country: Country) {
    this.countryForm.setValue({
      name: country.name.common,
      officalLanguage: this.languagePipe.transform(country.languages),
      capital: country.capital,
      population: country.population,
    });
  }

  updateCountry() {
    if (this.countryForm.invalid) {
      this.countryForm.markAllAsTouched();
      return;
    }
    this.snackBar.open('Operation successfull!', 'Close', {
      duration: 4000,
    });
    this.countryForm.reset();
    this.router.navigate(['/country']);
  }

  formValidator(name: string, errorCode: string | null = null): boolean {
    if (errorCode === null) {
      return (
        this.countryForm!.get(`${name}`)!.hasError('required') &&
        this.countryForm!.get(`${name}`)!.touched
      );
    } else {
      return (
        this.countryForm!.get(`${name}`)!.hasError(`${errorCode}`) &&
        this.countryForm!.get(`${name}`)!.dirty &&
        !this.formValidator(`${name}`)
      );
    }
  }
}
