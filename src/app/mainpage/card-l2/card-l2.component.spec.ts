import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardL2Component } from './card-l2.component';

describe('CardL2Component', () => {
  let component: CardL2Component;
  let fixture: ComponentFixture<CardL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
