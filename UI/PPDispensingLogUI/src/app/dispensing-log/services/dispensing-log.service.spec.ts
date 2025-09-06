import { TestBed } from '@angular/core/testing';

import { DispensingLogService } from './dispensing-log.service';

describe('DispensingLogService', () => {
  let service: DispensingLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensingLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
