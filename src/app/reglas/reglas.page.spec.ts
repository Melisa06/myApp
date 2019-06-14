import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasPage } from './reglas.page';

describe('ReglasPage', () => {
  let component: ReglasPage;
  let fixture: ComponentFixture<ReglasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
