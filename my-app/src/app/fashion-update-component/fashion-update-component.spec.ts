import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionUpdateComponent } from './fashion-update-component';

describe('FashionUpdateComponent', () => {
  let component: FashionUpdateComponent;
  let fixture: ComponentFixture<FashionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionUpdateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
