import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofiledetailsComponent } from './userprofiledetails.component';

describe('UserprofiledetailsComponent', () => {
  let component: UserprofiledetailsComponent;
  let fixture: ComponentFixture<UserprofiledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofiledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
