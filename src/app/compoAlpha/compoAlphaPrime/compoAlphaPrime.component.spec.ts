/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompoAlphaPrimeComponent } from './compoAlphaPrime.component';

describe('CompoAlphaPrimeComponent', () => {
  let component: CompoAlphaPrimeComponent;
  let fixture: ComponentFixture<CompoAlphaPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoAlphaPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoAlphaPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
