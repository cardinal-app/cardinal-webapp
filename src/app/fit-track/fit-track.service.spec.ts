import { TestBed } from '@angular/core/testing';

import { FitTrackService } from './fit-track.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// xdescribe('FitTrackService', () => {
//   let service: FitTrackService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [FitTrackService]
//     });
//
//     service = TestBed.inject(FitTrackService);
//   });
//
//   it('should retrieve historical weeks', () => {
//     // Given
//     const httpMock = TestBed.inject(HttpTestingController);
//     const weeks = [{ block: 1, week: 1, volume: 9, activity: 'none' }];
//     expect(service).toBeTruthy();
//
//     // When
//     service.getHistoricalWeeks().subscribe(result => {
//       expect(result).toBeFalsy(); // FixMe :: not being executed...
//       // expect(result[0]).toBeInstanceOf(Week);
//       // expect(Array.isArray(result)).toBe(true);
//       // expect(result.length > 0);
//     });
//
//     // Then
//     const mockRequest = httpMock.expectOne('http://localhost:8080/weeks');
//     expect(mockRequest.request.method).toEqual("GET");
//     mockRequest.flush(weeks);
//   });
//
// });
