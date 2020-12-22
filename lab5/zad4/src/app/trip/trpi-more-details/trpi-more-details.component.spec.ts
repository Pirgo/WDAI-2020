import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpiMoreDetailsComponent } from './trpi-more-details.component';

describe('TrpiMoreDetailsComponent', () => {
  let component: TrpiMoreDetailsComponent;
  let fixture: ComponentFixture<TrpiMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrpiMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpiMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
