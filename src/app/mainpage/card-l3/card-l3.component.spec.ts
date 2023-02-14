import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardL3Component } from './card-l3.component';

describe('CardL3Component', () => {
  let component: CardL3Component;
  let fixture: ComponentFixture<CardL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
