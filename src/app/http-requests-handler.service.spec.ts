import { TestBed } from '@angular/core/testing';

import { HttpRequestsHandlerService } from './http-requests-handler.service';

describe('HttpRequestsHandlerService', () => {
  let service: HttpRequestsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
