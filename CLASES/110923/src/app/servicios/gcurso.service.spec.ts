import { TestBed } from '@angular/core/testing';

import { GcursoService } from './gcurso.service';

describe('GcursoService', () => {
  let service: GcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
