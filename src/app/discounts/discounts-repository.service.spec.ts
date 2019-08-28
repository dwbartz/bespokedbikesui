import { TestBed } from '@angular/core/testing';

import { DiscountsRepositoryService } from './discounts-repository.service';

describe('DiscountsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscountsRepositoryService = TestBed.get(DiscountsRepositoryService);
    expect(service).toBeTruthy();
  });
});
