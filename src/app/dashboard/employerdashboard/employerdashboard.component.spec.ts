import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerdashboardComponent } from './employerdashboard.component';

describe('EmployerdashboardComponent', () => {
  let component: EmployerdashboardComponent;
  let fixture: ComponentFixture<EmployerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
