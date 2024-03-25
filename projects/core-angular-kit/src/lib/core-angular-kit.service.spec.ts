import { TestBed } from '@angular/core/testing';

import { CoreAngularKitService } from './core-angular-kit.service';

describe('CoreAngularKitService', () => {
  let service: CoreAngularKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreAngularKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
