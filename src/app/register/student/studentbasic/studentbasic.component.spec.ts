import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbasicComponent } from './studentbasic.component';

describe('StudentbasicComponent', () => {
  let component: StudentbasicComponent;
  let fixture: ComponentFixture<StudentbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
