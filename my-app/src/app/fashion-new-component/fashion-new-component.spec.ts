import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FashionNewComponent } from './fashion-new-component';

describe('FashionNewComponent', () => {
  let component: FashionNewComponent;
  let fixture: ComponentFixture<FashionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FashionNewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
