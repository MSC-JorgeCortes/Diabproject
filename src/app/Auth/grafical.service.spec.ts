import { TestBed } from '@angular/core/testing';

import { GraficalService } from './grafical.service';

describe('GraficalService', () => {
  let service: GraficalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
