import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListSearchComponent } from './product-list-search-component';

describe('ProductListSearchComponent', () => {
  let component: ProductListSearchComponent;
  let fixture: ComponentFixture<ProductListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
