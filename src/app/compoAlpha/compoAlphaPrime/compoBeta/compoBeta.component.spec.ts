/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompoBetaComponent } from './compoBeta.component';

describe('CompoBetaComponent', () => {
  let component: CompoBetaComponent;
  let fixture: ComponentFixture<CompoBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
