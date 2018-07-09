import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerprofessionalComponent } from './employerprofessional.component';

describe('EmployerprofessionalComponent', () => {
  let component: EmployerprofessionalComponent;
  let fixture: ComponentFixture<EmployerprofessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerprofessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
