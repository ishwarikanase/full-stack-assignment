import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Que3Component } from './que3.component';

describe('Que3Component', () => {
  let component: Que3Component;
  let fixture: ComponentFixture<Que3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Que3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Que3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
