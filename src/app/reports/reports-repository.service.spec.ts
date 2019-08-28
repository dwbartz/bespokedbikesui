import { TestBed } from '@angular/core/testing';

import { ReportsRepositoryService } from './reports-repository.service';

describe('ReportsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsRepositoryService = TestBed.get(ReportsRepositoryService);
    expect(service).toBeTruthy();
  });
});
