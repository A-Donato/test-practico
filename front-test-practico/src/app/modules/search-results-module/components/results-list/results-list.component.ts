import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.sass']
})
export class ResultsListComponent implements OnInit {
  @Input() searchResults = [];

  constructor() { }

  ngOnInit(): void {
  }

}
