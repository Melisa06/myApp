import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConociendoPage } from './conociendo.page';

describe('ConociendoPage', () => {
  let component: ConociendoPage;
  let fixture: ComponentFixture<ConociendoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConociendoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConociendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
