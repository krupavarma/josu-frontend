import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerbasicComponent } from './employerbasic.component';

describe('EmployerbasicComponent', () => {
  let component: EmployerbasicComponent;
  let fixture: ComponentFixture<EmployerbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
