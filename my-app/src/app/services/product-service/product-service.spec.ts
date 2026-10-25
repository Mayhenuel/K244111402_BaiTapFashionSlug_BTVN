import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from './product-service';

describe('ProductService', () => {
  let component: ProductService;
  let fixture: ComponentFixture<ProductService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
