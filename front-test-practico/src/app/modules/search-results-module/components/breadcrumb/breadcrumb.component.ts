import { SearchResultsService } from 'src/app/services/search.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  @Input() catergories: any[] = [];

  constructor( private searchResultsService: SearchResultsService ) { }

  ngOnInit(): void {
    this.searchResultsService.getBreadcrumItems().subscribe(response => {
      this.catergories = response.length > 0 ? this.generateLinksFromCategories(response) : [];
    })
  }

  private generateLinksFromCategories(categories: string[]) {
    return categories.map(category => {
      return {
        label: category,
        link: `/items?search=${category}`
      }
    });
  }
}
