import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();
  readonly placeHolderText = 'Nunca dejes de buscar';
  searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateSearchText(event: any) {
    const newText = event.target.value;
    this.searchText = newText;

  }

  triggerSearch(event: any) {
    console.log('emitimos el search', this.searchText);
    this.onSearch.emit(this.searchText);

  }

}
