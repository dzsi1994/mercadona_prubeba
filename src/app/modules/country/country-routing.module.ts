import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CountryDetailComponent,
  CountryListComponent,
  CountryEditComponent,
} from './pages';

import { CountryEditCanDeactivateGuardService } from './services';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  {
    path: 'new',
    component: CountryEditComponent,
    canDeactivate: [CountryEditCanDeactivateGuardService],
  },
  { path: ':countryId', component: CountryDetailComponent },
  {
    path: ':countryId/edit',
    component: CountryEditComponent,
    canDeactivate: [CountryEditCanDeactivateGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
