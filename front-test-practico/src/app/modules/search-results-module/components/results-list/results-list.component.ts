import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/searchResponse';
import { SearchResultsService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.sass']
})
export class ResultsListComponent implements OnInit {
  @Input() searchResultItems: SearchItem[] = [];

  constructor( private searchResultService: SearchResultsService ) { }

  ngOnInit(): void {
    this.searchResultService.getSearchResults().subscribe(results => {
      this.searchResultItems = results ? results!.items : [];
    })
  }

}
