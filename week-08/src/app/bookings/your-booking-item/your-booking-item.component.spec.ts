import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBookingItemComponent } from './your-booking-item.component';

describe('YourBookingItemComponent', () => {
  let component: YourBookingItemComponent;
  let fixture: ComponentFixture<YourBookingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBookingItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBookingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
