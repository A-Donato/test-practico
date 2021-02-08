import { TestBed } from '@angular/core/testing';
import { SearchResultsService } from './search.service';

describe('SearchResultsService', () => {
  let service: SearchResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
