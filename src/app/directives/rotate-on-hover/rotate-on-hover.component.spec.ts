import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateOnHoverComponent } from './rotate-on-hover.component';

describe('RotateOnHoverComponent', () => {
  let component: RotateOnHoverComponent;
  let fixture: ComponentFixture<RotateOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateOnHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
