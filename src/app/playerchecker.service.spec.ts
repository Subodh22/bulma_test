import { TestBed } from '@angular/core/testing';

import { PlayercheckerService } from './playerchecker.service';

describe('PlayercheckerService', () => {
  let service: PlayercheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayercheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
