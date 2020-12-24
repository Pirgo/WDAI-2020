import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBannerComponent } from './trip-banner.component';

describe('TripBannerComponent', () => {
  let component: TripBannerComponent;
  let fixture: ComponentFixture<TripBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
