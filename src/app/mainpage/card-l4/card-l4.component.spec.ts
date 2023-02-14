import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardL4Component } from './card-l4.component';

describe('CardL4Component', () => {
  let component: CardL4Component;
  let fixture: ComponentFixture<CardL4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardL4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
