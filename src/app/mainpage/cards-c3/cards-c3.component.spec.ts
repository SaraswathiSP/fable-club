import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsC3Component } from './cards-c3.component';

describe('CardsC3Component', () => {
  let component: CardsC3Component;
  let fixture: ComponentFixture<CardsC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsC3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
