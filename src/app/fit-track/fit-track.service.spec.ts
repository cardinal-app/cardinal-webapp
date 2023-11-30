import { TestBed } from '@angular/core/testing';

import { FitTrackService } from './fit-track.service';

describe('FitTrackService', () => {
  let service: FitTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
