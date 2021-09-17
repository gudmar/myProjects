import { TestBed } from '@angular/core/testing';

import { GetRandomColorService } from './get-random-color.service';

describe('GetRandomColorService', () => {
  let service: GetRandomColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
