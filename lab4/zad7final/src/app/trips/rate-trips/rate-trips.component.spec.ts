import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTripsComponent } from './rate-trips.component';

describe('RateTripsComponent', () => {
  let component: RateTripsComponent;
  let fixture: ComponentFixture<RateTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
