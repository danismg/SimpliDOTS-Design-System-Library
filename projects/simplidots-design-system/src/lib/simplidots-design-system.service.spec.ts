import { TestBed } from '@angular/core/testing';

import { SimplidotsDesignSystemService } from './simplidots-design-system.service';

describe('SimplidotsDesignSystemService', () => {
  let service: SimplidotsDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplidotsDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
