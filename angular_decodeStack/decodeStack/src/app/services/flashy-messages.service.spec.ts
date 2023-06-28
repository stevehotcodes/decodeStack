import { TestBed } from '@angular/core/testing';

import { FlashyMessagesService } from './flashy-messages.service';

describe('FlashyMessagesService', () => {
  let service: FlashyMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashyMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
