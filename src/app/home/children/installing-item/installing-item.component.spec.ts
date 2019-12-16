import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallingItemComponent } from './installing-item.component';

describe('InstallingItemComponent', () => {
  let component: InstallingItemComponent;
  let fixture: ComponentFixture<InstallingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallingItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
