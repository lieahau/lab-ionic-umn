import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebetanItemComponent } from './gebetan-item.component';

describe('GebetanItemComponent', () => {
  let component: GebetanItemComponent;
  let fixture: ComponentFixture<GebetanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebetanItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebetanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
