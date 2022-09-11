import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '@models/*';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = environment.apiUrL;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

  getCountryDetails(countryIsoCode: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${countryIsoCode}`)
      .pipe(map(([res]: Country[]) => res));
  }

  generateCountryForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      officalLanguage: ['', Validators.required],
      capital: ['', Validators.required],
      population: ['', Validators.required],
    });
  }

  openSnackBar(text: string) {
    return this.snackBar.open(text, 'Close', {
      duration: 4000,
    });
  }
}
