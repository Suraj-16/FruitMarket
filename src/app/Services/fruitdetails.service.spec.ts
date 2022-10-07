import { TestBed } from '@angular/core/testing';

import { FruitdetailsService } from './fruitdetails.service';

describe('FruitdetailsService', () => {
  let service: FruitdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
