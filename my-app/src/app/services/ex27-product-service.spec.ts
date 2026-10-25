import { TestBed } from '@angular/core/testing';
import { Ex27ProductService } from './ex27-product-service';

describe('Ex27ProductService', () => {
  let service: Ex27ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex27ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
