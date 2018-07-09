import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpersonalComponent } from './employerpersonal.component';

describe('EmployerpersonalComponent', () => {
  let component: EmployerpersonalComponent;
  let fixture: ComponentFixture<EmployerpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
