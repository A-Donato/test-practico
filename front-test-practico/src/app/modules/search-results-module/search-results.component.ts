import { SearchResultsService } from 'src/app/services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
  searchText: string = '';

  constructor(
    private route: ActivatedRoute,
    private searchResultService: SearchResultsService
    ) { }

  ngOnInit(): void {
    this.subscribeToQueryParamsChange();
  }

  private subscribeToQueryParamsChange() {
    this.route.queryParams.subscribe((queryParams:any) => {
      this.searchText = queryParams.search ? queryParams.search : '';
      if(this.searchText) {
        this.searchResultService.search(this.searchText);
      }
    })
  }

}
