import { TestBed } from '@angular/core/testing';

import { SalesRepositoryService } from './sales-repository.service';

describe('SalesRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesRepositoryService = TestBed.get(SalesRepositoryService);
    expect(service).toBeTruthy();
  });
});
