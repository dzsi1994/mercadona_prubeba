import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCountryComponent } from './pages/new-country/new-country.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryFormComponent } from './components/country-form/country-form.component';

@NgModule({
  declarations: [NewCountryComponent, CountryListComponent, CountryFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class CountryModule {}
