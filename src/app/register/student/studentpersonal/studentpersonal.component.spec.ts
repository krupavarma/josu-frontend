import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpersonalComponent } from './studentpersonal.component';

describe('StudentpersonalComponent', () => {
  let component: StudentpersonalComponent;
  let fixture: ComponentFixture<StudentpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
