import { TestBed } from '@angular/core/testing';

import { SalesPersonsRepositoryService } from './sales-persons-repository.service';

describe('SalesPersonsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesPersonsRepositoryService = TestBed.get(SalesPersonsRepositoryService);
    expect(service).toBeTruthy();
  });
});
