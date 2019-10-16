import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarCalonGebetanPage } from './daftar-calon-gebetan.page';

describe('DaftarCalonGebetanPage', () => {
  let component: DaftarCalonGebetanPage;
  let fixture: ComponentFixture<DaftarCalonGebetanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarCalonGebetanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarCalonGebetanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
