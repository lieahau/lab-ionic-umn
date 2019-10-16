import { TestBed } from '@angular/core/testing';

import { DaftarCalonGebetanService } from './daftar-calon-gebetan.service';

describe('DaftarCalonGebetanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarCalonGebetanService = TestBed.get(DaftarCalonGebetanService);
    expect(service).toBeTruthy();
  });
});
