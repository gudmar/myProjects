import { TestBed } from '@angular/core/testing';

import { MailToService } from './mail-to.service';

describe('MailToService', () => {
  let service: MailToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
