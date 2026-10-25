import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListCallServiceComponent } from './product-list-call-service-component';

describe('ProductListCallServiceComponent', () => {
  let component: ProductListCallServiceComponent;
  let fixture: ComponentFixture<ProductListCallServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListCallServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListCallServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
