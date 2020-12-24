import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrTripComponent } from './filtr-trip.component';

describe('FiltrTripComponent', () => {
  let component: FiltrTripComponent;
  let fixture: ComponentFixture<FiltrTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
