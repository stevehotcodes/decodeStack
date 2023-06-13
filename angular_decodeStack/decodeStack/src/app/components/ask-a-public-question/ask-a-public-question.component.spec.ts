import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAPublicQuestionComponent } from './ask-a-public-question.component';

describe('AskAPublicQuestionComponent', () => {
  let component: AskAPublicQuestionComponent;
  let fixture: ComponentFixture<AskAPublicQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AskAPublicQuestionComponent]
    });
    fixture = TestBed.createComponent(AskAPublicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
