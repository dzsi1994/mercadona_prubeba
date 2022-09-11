import { Component, OnInit } from '@angular/core';
import { Country } from '@models/*';
import { Observable } from 'rxjs';
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
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryDetails$ = this.countryService.getCountryDetails('peru');
  }
  displayModal(country: Country) {
    console.log(country);
  }
  //Popup form for creating a country
  // openDialog() {
  //   let dialogRef = this.dialog.open(CreateCountryDialogComponent, {
  //     data: this.input,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result == 'true') {
  //       this.output = <JSON>this.input;
  //       this.createCountry(this.output);
  //       this.input = {
  //         country_name: '',
  //         capital: '',
  //         population: '',
  //         disabled: false,
  //       };
  //     }
  //   });
  // }
}
