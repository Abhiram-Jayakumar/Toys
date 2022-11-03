import { TestBed } from '@angular/core/testing';

import { ToyserviceService } from './toyservice.service';

describe('ToyserviceService', () => {
  let service: ToyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
