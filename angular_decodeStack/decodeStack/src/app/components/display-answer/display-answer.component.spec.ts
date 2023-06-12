import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnswerComponent } from './display-answer.component';

describe('DisplayAnswerComponent', () => {
  let component: DisplayAnswerComponent;
  let fixture: ComponentFixture<DisplayAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DisplayAnswerComponent]
    });
    fixture = TestBed.createComponent(DisplayAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
