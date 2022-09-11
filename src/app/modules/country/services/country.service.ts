import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '@models/*';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = environment.apiUrL;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

  getCountryDetails(countryIsoCode: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${countryIsoCode}`)
      .pipe(map(([res]: Country[]) => res));
  }
}
