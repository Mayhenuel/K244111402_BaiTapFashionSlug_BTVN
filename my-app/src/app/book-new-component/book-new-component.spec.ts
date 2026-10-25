import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookNewComponent } from './book-new-component';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
