import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollegelistComponent } from './admin-collegelist.component';

describe('AdminCollegelistComponent', () => {
  let component: AdminCollegelistComponent;
  let fixture: ComponentFixture<AdminCollegelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCollegelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCollegelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
