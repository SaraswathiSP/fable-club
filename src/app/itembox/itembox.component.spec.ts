import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemboxComponent } from './itembox.component';

describe('ItemboxComponent', () => {
  let component: ItemboxComponent;
  let fixture: ComponentFixture<ItemboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
