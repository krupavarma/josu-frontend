import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegebasicComponent } from './collegebasic.component';

describe('CollegebasicComponent', () => {
  let component: CollegebasicComponent;
  let fixture: ComponentFixture<CollegebasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegebasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
