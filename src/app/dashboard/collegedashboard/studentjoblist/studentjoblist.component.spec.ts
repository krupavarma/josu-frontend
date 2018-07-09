import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentjoblistComponent } from './studentjoblist.component';

describe('StudentjoblistComponent', () => {
  let component: StudentjoblistComponent;
  let fixture: ComponentFixture<StudentjoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentjoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentjoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
