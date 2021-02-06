import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/app/models/searchResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private httpClient: HttpClient) { }

  search(searchText: string): Observable<SearchResponse> {
    const searchParams = new HttpParams().set('q', searchText);
    return this.httpClient.get<SearchResponse>(environment.endpoints.search, {params: searchParams});
  }
}
