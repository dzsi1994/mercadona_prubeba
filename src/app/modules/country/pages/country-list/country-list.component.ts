import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Country } from '@models/*';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
  takeWhile,
} from 'rxjs';
import { CoatOfArmsModalDialogComponent } from '../../components';
import { CountryService } from '../../services';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  displayedColumns: string[] = [
    'name.common',
    'population',
    'languages',
    'flag',
  ];

  countryDetails$!: Observable<Country[]>;
  searchTerm = new FormControl();

  constructor(
    private countryService: CountryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.countryDetails$ = this.searchTerm.valueChanges.pipe(
      takeWhile((searchTerm) => searchTerm.length > 0),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((searchTerm) =>
        this.countryService.getCountryDetails(searchTerm)
      )
    );
    this.countryDetails$ = this.countryService.getCountries();
  }

  displayModal(country: Country) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = country;
    dialogConfig.width = '500px';

    this.dialog.open(CoatOfArmsModalDialogComponent, dialogConfig);
  }
}
