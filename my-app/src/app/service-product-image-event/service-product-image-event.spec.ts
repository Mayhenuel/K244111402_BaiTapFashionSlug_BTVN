import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProductImageEvent } from './service-product-image-event';

describe('ServiceProductImageEvent', () => {
  let component: ServiceProductImageEvent;
  let fixture: ComponentFixture<ServiceProductImageEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
