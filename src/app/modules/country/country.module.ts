import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryFormComponent } from './components';
import {
  CountryDetailComponent,
  CountryListComponent,
  NewCountryComponent,
} from './pages';
import {
  CountryEditCanDeactivateGuardService,
  CountryService,
} from './services';

@NgModule({
  declarations: [
    NewCountryComponent,
    CountryListComponent,
    CountryFormComponent,
    CountryDetailComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [CountryService, CountryEditCanDeactivateGuardService],
})
export class CountryModule {}
