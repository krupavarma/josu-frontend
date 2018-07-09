import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeprofessionalComponent } from './collegeprofessional.component';

describe('CollegeprofessionalComponent', () => {
  let component: CollegeprofessionalComponent;
  let fixture: ComponentFixture<CollegeprofessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeprofessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeprofessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
