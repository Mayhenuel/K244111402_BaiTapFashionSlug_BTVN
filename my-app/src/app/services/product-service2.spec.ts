import { TestBed } from '@angular/core/testing';
import { ProductService2 } from './product-service2';

describe('ProductService2', () => {
  let service: ProductService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
