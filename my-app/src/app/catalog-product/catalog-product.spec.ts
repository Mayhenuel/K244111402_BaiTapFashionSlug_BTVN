import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogProduct } from './catalog-product';

describe('CatalogProduct', () => {
  let component: CatalogProduct;
  let fixture: ComponentFixture<CatalogProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
