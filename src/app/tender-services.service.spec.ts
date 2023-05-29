import { TestBed } from '@angular/core/testing';

import { TenderServicesService } from './tender-services.service';

describe('TenderServicesService', () => {
  let service: TenderServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenderServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
