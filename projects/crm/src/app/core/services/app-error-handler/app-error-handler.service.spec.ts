/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppErrorHandlerService } from './app-error-handler.service';

describe('Service: AppErrorHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppErrorHandlerService]
    });
  });

  it('should ...', inject([AppErrorHandlerService], (service: AppErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
