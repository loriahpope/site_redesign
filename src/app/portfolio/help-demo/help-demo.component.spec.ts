import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDemoComponent } from './help-demo.component';

describe('HelpDemoComponent', () => {
  let component: HelpDemoComponent;
  let fixture: ComponentFixture<HelpDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
