import { TestBed } from '@angular/core/testing';

import { DesignSystemSimplidotsService } from './design-system-simplidots.service';

describe('DesignSystemSimplidotsService', () => {
  let service: DesignSystemSimplidotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignSystemSimplidotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
