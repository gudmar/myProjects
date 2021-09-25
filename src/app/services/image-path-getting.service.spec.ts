import { TestBed } from '@angular/core/testing';

import { ImagePathGettingService } from './image-path-getting.service';

describe('ImagePathGettingService', () => {
  let service: ImagePathGettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagePathGettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
