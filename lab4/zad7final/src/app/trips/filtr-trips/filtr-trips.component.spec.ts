import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrTripsComponent } from './filtr-trips.component';

describe('FiltrTripsComponent', () => {
  let component: FiltrTripsComponent;
  let fixture: ComponentFixture<FiltrTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
