import { TestBed } from '@angular/core/testing';

import { GetAboutMeContentService } from './get-about-me-content.service';

describe('GetAboutMeContentService', () => {
  let service: GetAboutMeContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAboutMeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
