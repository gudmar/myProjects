import { TestBed } from '@angular/core/testing';

import { GetServiceByDistinguishedNameService } from './get-service-by-distinguished-name.service';

describe('GetServiceByDistinguishedNameService', () => {
  let service: GetServiceByDistinguishedNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServiceByDistinguishedNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
