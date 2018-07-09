import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofessionalComponent } from './studentprofessional.component';

describe('StudentprofessionalComponent', () => {
  let component: StudentprofessionalComponent;
  let fixture: ComponentFixture<StudentprofessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentprofessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
