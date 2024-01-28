/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompoAComponent } from './compoA.component';

describe('CompoAComponent', () => {
  let component: CompoAComponent;
  let fixture: ComponentFixture<CompoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
