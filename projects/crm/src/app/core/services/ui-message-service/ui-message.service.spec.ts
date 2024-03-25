/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UiMessageService } from './ui-message.service';

describe('Service: UiMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiMessageService]
    });
  });

  it('should ...', inject([UiMessageService], (service: UiMessageService) => {
    expect(service).toBeTruthy();
  }));
});
