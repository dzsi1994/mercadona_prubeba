import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
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
