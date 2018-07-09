import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerslistComponent } from './employerslist.component';

describe('EmployerslistComponent', () => {
  let component: EmployerslistComponent;
  let fixture: ComponentFixture<EmployerslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
