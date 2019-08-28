import { TestBed } from '@angular/core/testing';

import { CustomersRepositoryService } from './customers-repository.service';

describe('CustomersRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersRepositoryService = TestBed.get(CustomersRepositoryService);
    expect(service).toBeTruthy();
  });
});
