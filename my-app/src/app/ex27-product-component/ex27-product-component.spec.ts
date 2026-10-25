import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex27ProductComponent } from './ex27-product-component';

describe('Ex27ProductComponent', () => {
  let component: Ex27ProductComponent;
  let fixture: ComponentFixture<Ex27ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex27ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex27ProductComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
