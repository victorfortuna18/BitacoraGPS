import { TestBed } from '@angular/core/testing';

import { GooglemapsService } from './googlemapsWayPoints.service';

describe('GooglemapsService', () => {
  let service: GooglemapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglemapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
