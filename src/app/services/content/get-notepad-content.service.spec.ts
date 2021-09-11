import { TestBed } from '@angular/core/testing';

import { GetNotepadContentService } from './get-notepad-content.service';

describe('GetNotepadContentService', () => {
  let service: GetNotepadContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNotepadContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
