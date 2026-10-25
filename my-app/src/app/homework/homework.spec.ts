import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Homework } from './homework';

describe('Homework', () => {
  let component: Homework;
  let fixture: ComponentFixture<Homework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Homework],
    }).compileComponents();

    fixture = TestBed.createComponent(Homework);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
