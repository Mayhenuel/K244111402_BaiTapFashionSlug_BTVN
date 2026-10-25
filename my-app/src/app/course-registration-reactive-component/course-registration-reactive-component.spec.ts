import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseRegistrationReactiveComponent } from './course-registration-reactive-component';

describe('CourseRegistrationReactiveComponent', () => {
  let component: CourseRegistrationReactiveComponent;
  let fixture: ComponentFixture<CourseRegistrationReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseRegistrationReactiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseRegistrationReactiveComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
