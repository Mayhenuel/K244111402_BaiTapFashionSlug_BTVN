import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FakeProductComponent } from './fake-product-component';

describe('FakeProductComponent', () => {
  let component: FakeProductComponent;
  let fixture: ComponentFixture<FakeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FakeProductComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
