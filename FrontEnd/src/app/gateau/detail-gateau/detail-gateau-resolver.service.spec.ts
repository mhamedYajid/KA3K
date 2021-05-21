/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailGateauResolverService } from './detail-gateau-resolver.service';

describe('Service: DetailGateauResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailGateauResolverService]
    });
  });

  it('should ...', inject([DetailGateauResolverService], (service: DetailGateauResolverService) => {
    expect(service).toBeTruthy();
  }));
});
