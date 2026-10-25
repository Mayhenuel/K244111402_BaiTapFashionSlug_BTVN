import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFashionComponent } from './search-fashion-component';

describe('SearchFashionComponent', () => {
  let component: SearchFashionComponent;
  let fixture: ComponentFixture<SearchFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFashionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFashionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
