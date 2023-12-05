import { TestBed } from '@angular/core/testing';

import { FitTrackService } from './fit-track.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Week } from "../model/week";

xdescribe('FitTrackService', () => {
  let service: FitTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(FitTrackService);
  });

  it('should retrieve historical weeks', async () => {
    expect(service).toBeTruthy();
    const httpMock = TestBed.inject(HttpTestingController);

    const weeks = [
      {
        block: 1,
        week: 1,
        volume: 9,
        activity: 'none'
      }
    ];

    let result: any;
    service.getHistoricalWeeks().then(response => {
      result = response;
    }) // Fix this test - does it return values in order by block, then week.

    expect(result[0]).toBeInstanceOf(Week);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length > 0);
    console.log(result);

    const mockRequest = httpMock.expectOne('http://localhost:8080/weeks');
    mockRequest.flush(weeks);
  });
});
