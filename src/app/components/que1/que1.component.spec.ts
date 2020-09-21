import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Que1Component } from './que1.component';

describe('Que1Component', () => {
  let component: Que1Component;
  let fixture: ComponentFixture<Que1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Que1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Que1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
