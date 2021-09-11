import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentArticleComponent } from './document-article.component';

describe('DocumentArticleComponent', () => {
  let component: DocumentArticleComponent;
  let fixture: ComponentFixture<DocumentArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
