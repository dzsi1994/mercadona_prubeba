import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  countryDetails$!: Observable<any>;
  constructor(private countryService: CountryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryDetails$ = this.activatedRoute.
  }

}
