import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail';

describe('ServiceProductImageEventDetail', () => {
  let component: ServiceProductImageEventDetail;
  let fixture: ComponentFixture<ServiceProductImageEventDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProductImageEventDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
