import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRectangleComponent } from './single-rectangle.component';

describe('SingleRectangleComponent', () => {
  let component: SingleRectangleComponent;
  let fixture: ComponentFixture<SingleRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRectangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
