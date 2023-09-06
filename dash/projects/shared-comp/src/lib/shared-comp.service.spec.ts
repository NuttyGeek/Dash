import { TestBed } from '@angular/core/testing';

import { SharedCompService } from './shared-comp.service';

describe('SharedCompService', () => {
  let service: SharedCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
