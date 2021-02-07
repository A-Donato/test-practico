import { SearchResultsService } from './../services/search-results.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  @Input() catergories: string[] = [];

  constructor( private searchResultsService: SearchResultsService ) { }

  ngOnInit(): void {
    this.searchResultsService.getBreadcrumItems().subscribe(response => {
      this.catergories = response;
    })
  }

}
