import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentImageComponent } from './document-image.component';

describe('DocumentImageComponent', () => {
  let component: DocumentImageComponent;
  let fixture: ComponentFixture<DocumentImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
