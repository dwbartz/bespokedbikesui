import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonsFormComponent } from './sales-persons-form.component';

describe('SalesPersonsFormComponent', () => {
  let component: SalesPersonsFormComponent;
  let fixture: ComponentFixture<SalesPersonsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
