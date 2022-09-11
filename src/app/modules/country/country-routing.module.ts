import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CountryDetailComponent,
  CountryListComponent,
  NewCountryComponent,
} from './pages';
import { CountryEditComponent } from './pages/country-edit/country-edit.component';
import { CountryEditCanDeactivateGuardService } from './services';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  {
    path: 'new',
    component: NewCountryComponent,
    canDeactivate: [CountryEditCanDeactivateGuardService],
  },
  { path: ':countryId', component: CountryDetailComponent },
  { path: ':countryId/edit', component: CountryEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
