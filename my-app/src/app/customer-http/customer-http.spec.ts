import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerHttp } from './customer-http';

describe('CustomerHttp', () => {
  let component: CustomerHttp;
  let fixture: ComponentFixture<CustomerHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
