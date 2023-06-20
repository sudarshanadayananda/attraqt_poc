import { TestBed } from '@angular/core/testing';

import { AttraqtService } from './attraqt.service';

describe('AttraqtService', () => {
  let service: AttraqtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttraqtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
