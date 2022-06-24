import { TestBed } from '@angular/core/testing';

import { ServiceTechnicalService } from './service-technical.service';

describe('ServiceTechnicalService', () => {
  let service: ServiceTechnicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTechnicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
