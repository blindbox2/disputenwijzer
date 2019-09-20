import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EindePage } from './einde.page';

describe('EindePage', () => {
  let component: EindePage;
  let fixture: ComponentFixture<EindePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EindePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EindePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
