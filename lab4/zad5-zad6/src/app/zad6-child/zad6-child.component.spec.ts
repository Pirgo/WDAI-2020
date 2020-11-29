import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad6ChildComponent } from './zad6-child.component';

describe('Zad6ChildComponent', () => {
  let component: Zad6ChildComponent;
  let fixture: ComponentFixture<Zad6ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad6ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
