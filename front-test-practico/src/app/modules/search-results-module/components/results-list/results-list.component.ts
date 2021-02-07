import { SearchItem, SearchResponse } from './../../../../models/searchResponse';
import { SearchResultsService } from './../services/search-results.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.sass']
})
export class ResultsListComponent implements OnInit {
  @Input() searchResultItems: SearchItem[] | undefined = [];

  constructor( private searchResultService: SearchResultsService ) { }

  ngOnInit(): void {
    this.searchResultService.getSearchResults().subscribe(results => {
      this.searchResultItems = results?.items;
      console.log('this.searchResultItems', this.searchResultItems)
    })
  }

}
