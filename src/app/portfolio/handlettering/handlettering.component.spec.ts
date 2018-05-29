import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandletteringComponent } from './handlettering.component';

describe('HandletteringComponent', () => {
  let component: HandletteringComponent;
  let fixture: ComponentFixture<HandletteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandletteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandletteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
