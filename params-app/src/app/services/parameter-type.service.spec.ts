import { TestBed } from '@angular/core/testing';

import { ParameterTypeService } from './parameter-type.service';

describe('ParameterTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParameterTypeService = TestBed.get(ParameterTypeService);
    expect(service).toBeTruthy();
  });
});
