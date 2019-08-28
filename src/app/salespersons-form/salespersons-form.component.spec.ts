import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonsFormComponent } from './salespersons-form.component';

describe('SalespersonsFormComponent', () => {
  let component: SalespersonsFormComponent;
  let fixture: ComponentFixture<SalespersonsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespersonsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
