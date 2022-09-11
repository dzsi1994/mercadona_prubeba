import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Country } from '@models/*';
import { first, Observable } from 'rxjs';
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
    'location',
    'actions',
  ];

  searchTerm: string = '';
  source!: Country[];

  constructor(
    private countryService: CountryService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countryService
      .getAllCountries()
      .pipe(first())
      .subscribe((countries) => {
        this.source = countries;
      });
  }

  displayModal(country: Country) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = country;
    dialogConfig.width = '500px';

    this.dialog.open(CoatOfArmsModalDialogComponent, dialogConfig);
  }

  get countries() {
    return this.source
      ? this.source.filter((country) =>
          this.searchTerm
            ? country.name.common
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())
            : country
        )
      : this.source;
  }
}
