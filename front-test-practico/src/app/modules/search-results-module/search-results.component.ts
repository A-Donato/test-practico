import { SearchResultsService } from './components/services/search-results.service';
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
      console.log('queryParams', queryParams)
      this.searchText = queryParams.q;
      this.searchResultService.search(this.searchText).subscribe(response => {
        console.log('response', response);
      });
     });
  }

}