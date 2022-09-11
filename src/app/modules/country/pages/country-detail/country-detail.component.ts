import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, Observable, switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  countryDetails$!: Observable<any>;
  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryDetails$ = this.activatedRoute.paramMap.pipe(
      filter((params: ParamMap) => !!params.get('countryId')),
      switchMap((params: ParamMap) =>
        this.countryService.getCountryDetails(params.get('countryId') ?? '')
      )
    );
  }
}
