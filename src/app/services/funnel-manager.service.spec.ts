import { TestBed, inject } from '@angular/core/testing';

import { FunnelManager } from './funnel-manager.service';

describe('FunnelManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunnelManager]
    });
  });

  it('should be created', inject([FunnelManager], (service: FunnelManager) => {
    expect(service).toBeTruthy();
  }));
});
