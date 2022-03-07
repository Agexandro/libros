import { TestBed } from '@angular/core/testing';

import { ActivadoGuard } from './activado.guard';

describe('ActivadoGuard', () => {
  let guard: ActivadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
