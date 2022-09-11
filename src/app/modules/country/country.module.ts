import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

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
import { CountryRoutingModule } from './country-routing.module';
import { RouterModule } from '@angular/router';
import { CoatOfArmsModalDialogComponent } from './components/coat-of-arms-modal-dialog/coat-of-arms-modal-dialog.component';
import { LanguagePipe } from './pipes/language.pipe';

const components = [
  CountryDetailComponent,
  CountryListComponent,
  NewCountryComponent,
  CountryFormComponent,
  CoatOfArmsModalDialogComponent,
];
const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  CountryRoutingModule,
  RouterModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
];

const services = [CountryService, CountryEditCanDeactivateGuardService];

@NgModule({
  declarations: [...components, LanguagePipe],
  imports: [...modules],
  providers: [...services],
})
export class CountryModule {}
