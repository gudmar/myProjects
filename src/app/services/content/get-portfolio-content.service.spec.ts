import { TestBed } from '@angular/core/testing';

import { GetPortfolioContentService } from './get-portfolio-content.service';

describe('GetPortfolioContentService', () => {
  let service: GetPortfolioContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPortfolioContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
