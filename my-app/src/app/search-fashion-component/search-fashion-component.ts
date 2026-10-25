import { Component, OnInit, signal } from '@angular/core';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';
import { createSlug } from '../classes/SlugHelper';

interface FashionSearchResult {
  fashion: Fashion;
  similarity: number;
}

@Component({
  selector: 'app-search-fashion-component',
  standalone: false,
  templateUrl: './search-fashion-component.html',
  styleUrl: './search-fashion-component.css',
})
export class SearchFashionComponent implements OnInit {
  fashions: Fashion[] = [];
  results = signal<FashionSearchResult[]>([]);
  query = '';
  searchField: 'fashion_subject' | 'fashion_detail' = 'fashion_subject';
  resultLimit = 10;
  errMessage = signal('');
  hasSearched = signal(false);

  constructor(private fashionService: FashionAPIService) {}

  fashionSlug(fashion: Fashion): string {
    return createSlug(fashion.fashion_subject || fashion.style || 'fashion', fashion.IdF ?? 0);
  }

  ngOnInit(): void {
    this.fashionService.getFashions().subscribe({
      next: (fashions: Fashion[]) => {
        this.fashions = fashions.map((fashion) => Object.assign(new Fashion(), fashion));
      },
      error: (error: unknown) => {
        this.errMessage.set(error instanceof Error ? error.message : String(error));
      },
    });
  }

  searchFashions(): void {
    const queryTokens = this.tokenize(this.query);
    this.errMessage.set('');
    this.hasSearched.set(true);

    if (queryTokens.size === 0) {
      this.results.set([]);
      return;
    }

    const rankedResults = this.fashions
      .map((fashion) => {
        const text = fashion[this.searchField] ?? '';
        const textTokens = this.tokenize(text);
        const intersectionSize = [...queryTokens].filter((token) => textTokens.has(token)).length;
        const unionSize = new Set([...queryTokens, ...textTokens]).size;

        return {
          fashion,
          similarity: unionSize === 0 ? 0 : intersectionSize / unionSize,
        };
      })
      .filter((result) => result.similarity > 0)
      .sort((a, b) => b.similarity - a.similarity);

    this.results.set(rankedResults.slice(0, this.resultLimit));
  }

  onSearchFieldChange(): void {
    if (this.hasSearched() && this.query.trim()) {
      this.searchFashions();
    }
  }

  similarityClass(similarity: number): string {
    if (similarity >= 0.75) {
      return 'similarity-high';
    }
    if (similarity >= 0.5) {
      return 'similarity-medium';
    }
    return 'similarity-low';
  }

  private tokenize(value: string): Set<string> {
    const normalized = value
      .toLocaleLowerCase('vi')
      .replace(/[đĐ]/g, 'd')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return new Set(normalized.match(/[\p{L}\p{N}]+/gu) ?? []);
  }
}
