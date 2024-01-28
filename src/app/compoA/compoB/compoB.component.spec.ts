/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompoBComponent } from './compoB.component';

describe('CompoBComponent', () => {
  let component: CompoBComponent;
  let fixture: ComponentFixture<CompoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
