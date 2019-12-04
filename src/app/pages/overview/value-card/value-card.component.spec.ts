import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCardComponent } from './value-card.component';

describe('ValueCardComponent', () => {
  let component: ValueCardComponent;
  let fixture: ComponentFixture<ValueCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
