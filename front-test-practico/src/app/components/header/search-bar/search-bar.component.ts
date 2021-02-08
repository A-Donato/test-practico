import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();
  readonly placeHolderText = 'Nunca dejes de buscar';
  searchText: string = '';

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( queryParams => {
      this.searchText = queryParams.get('search') !== null ? queryParams.get('search')! : this.searchText;
    });
  }

  updateSearchText(event: any) {
    const newText = event.target.value;
    this.searchText = newText;
  }

  triggerSearch(event: any) {
    this.onSearch.emit(this.searchText);
  }
}
