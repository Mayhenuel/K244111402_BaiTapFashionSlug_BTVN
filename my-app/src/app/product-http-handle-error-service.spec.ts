import { TestBed } from '@angular/core/testing';
import { ProductHttpHandleErrorService } from './product-http-handle-error-service';

describe('ProductHttpHandleErrorService', () => {
  let service: ProductHttpHandleErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpHandleErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
