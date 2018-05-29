import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUiComponent } from './daily-ui.component';

describe('DailyUiComponent', () => {
  let component: DailyUiComponent;
  let fixture: ComponentFixture<DailyUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
