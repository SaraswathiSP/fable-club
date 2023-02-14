import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsC2Component } from './cards-c2.component';

describe('CardsC2Component', () => {
  let component: CardsC2Component;
  let fixture: ComponentFixture<CardsC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsC2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
