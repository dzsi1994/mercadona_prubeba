import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryFormComponent } from '../components/country-form/country-form.component';
import { NewCountryComponent } from '../pages';

@Injectable({
  providedIn: 'root',
})
export class CountryEditCanDeactivateGuardService
  implements CanDeactivate<NewCountryComponent>
{
  constructor() {}
  canDeactivate(component: NewCountryComponent): Observable<boolean> | boolean {
    if (component.countryForm.dirty) {
      return window.confirm('You have unsaved changes! Leave?');
    }
    return true;
  }
}
