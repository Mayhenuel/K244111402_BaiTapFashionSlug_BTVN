import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingEventComponent } from './binding-event-component';

describe('BindingEventComponent', () => {
  let component: BindingEventComponent;
  let fixture: ComponentFixture<BindingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingEventComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
