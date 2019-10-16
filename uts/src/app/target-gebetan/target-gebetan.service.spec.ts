import { TestBed } from '@angular/core/testing';

import { TargetGebetanService } from './target-gebetan.service';

describe('TargetGebetanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetGebetanService = TestBed.get(TargetGebetanService);
    expect(service).toBeTruthy();
  });
});
