import { TestBed } from '@angular/core/testing';

import { CountryEditCanDeactivateGuardService } from './country-edit-can-deactivate-guard.service';

describe('CountryEditCanDeactivateGuardService', () => {
  let service: CountryEditCanDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryEditCanDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
