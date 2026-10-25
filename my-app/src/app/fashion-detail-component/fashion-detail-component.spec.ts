import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionDetailComponent } from './fashion-detail-component';

describe('FashionDetailComponent', () => {
  let component: FashionDetailComponent;
  let fixture: ComponentFixture<FashionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
