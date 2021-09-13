import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentEntryComponent } from './employment-entry.component';

describe('EmploymentEntryComponent', () => {
  let component: EmploymentEntryComponent;
  let fixture: ComponentFixture<EmploymentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
