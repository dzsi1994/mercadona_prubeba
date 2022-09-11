import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryEditComponent } from '../pages';

@Injectable({
  providedIn: 'root',
})
export class CountryEditCanDeactivateGuardService
  implements CanDeactivate<CountryEditComponent>
{
  constructor() {}
  canDeactivate(
    component: CountryEditComponent
  ): Observable<boolean> | boolean {
    if (component.countryForm.dirty) {
      return window.confirm('You have unsaved changes! Leave?');
    }
    return true;
  }
}
