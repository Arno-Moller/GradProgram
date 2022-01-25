import { TestBed } from '@angular/core/testing';

import { PenToPrintService } from './pen-to-print.service';

describe('PenToPrintService', () => {
  let service: PenToPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenToPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
