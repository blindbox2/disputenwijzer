import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterPage } from './rooster.page';

describe('RoosterPage', () => {
  let component: RoosterPage;
  let fixture: ComponentFixture<RoosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
