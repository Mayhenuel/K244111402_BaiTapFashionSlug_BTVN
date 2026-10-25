import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionDeleteComponent } from './fashion-delete-component';

describe('FashionDeleteComponent', () => {
  let component: FashionDeleteComponent;
  let fixture: ComponentFixture<FashionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionDeleteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
