import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryFormComponent } from '../components/country-form/country-form.component';

@Injectable({
  providedIn: 'root',
})
export class CountryEditCanDeactivateGuardService
  implements CanDeactivate<CountryFormComponent>
{
  constructor() {}
  canDeactivate(
    component: CountryFormComponent
  ): Observable<boolean> | boolean {
    if (!component.isUpdating && component.countryForm.dirty) {
      component.isUpdating = false;
      return window.confirm('You have unsaved changes! Leave?');
    }
    return true;
  }
}
