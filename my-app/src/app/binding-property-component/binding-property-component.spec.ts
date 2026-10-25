import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingPropertyComponent } from './binding-property-component';

describe('BindingPropertyComponent', () => {
  let component: BindingPropertyComponent;
  let fixture: ComponentFixture<BindingPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingPropertyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingPropertyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
