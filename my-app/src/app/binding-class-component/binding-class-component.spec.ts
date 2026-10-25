import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingClassComponent } from './binding-class-component';

describe('BindingClassComponent', () => {
  let component: BindingClassComponent;
  let fixture: ComponentFixture<BindingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingClassComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingClassComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
