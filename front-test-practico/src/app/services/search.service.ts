import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemInformationResponse } from 'src/app/models/itemInformationResponse';
import { SearchResponse } from 'src/app/models/searchResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private _searchResults = new BehaviorSubject<SearchResponse | undefined>(undefined);
  private _breadcrumItems = new BehaviorSubject<string[]>([]);
  private _itemInformation = new BehaviorSubject<ItemInformationResponse | undefined>(undefined);

  constructor(private httpClient: HttpClient) { }

  search(searchText: string): void {
    const searchParams = new HttpParams().set('q', searchText);
    this.httpClient.get<SearchResponse>(environment.endpoints.search, {params: searchParams}).subscribe((response => {
      this._searchResults.next(response);
      this._breadcrumItems.next(response.categories.slice(0,3)); // Too many results, just showing top 3;
    }));
  }

  searchItemInformation(itemId: string) {
    const endpoint = environment.endpoints.itemDetails.replace(':id', itemId);
    return this.httpClient.get<ItemInformationResponse>(endpoint);
  }

  getSearchResults() {
    return this._searchResults.asObservable();
  }

  getBreadcrumItems() {
    return this._breadcrumItems.asObservable();
  }

  getItemInformation() {
    return this._itemInformation.asObservable();
  }


}
