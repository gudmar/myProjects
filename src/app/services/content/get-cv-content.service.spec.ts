import { TestBed } from '@angular/core/testing';

import { GetCvContentService } from './get-cv-content.service';

describe('GetCvContentService', () => {
  let service: GetCvContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCvContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
