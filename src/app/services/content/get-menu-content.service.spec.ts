import { TestBed } from '@angular/core/testing';

import { GetMenuContentService } from './get-menu-content.service';

describe('GetMenuContentService', () => {
  let service: GetMenuContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMenuContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
