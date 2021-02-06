import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.sass']
})
export class ResultItemComponent implements OnInit {
  @Input() imageSrc: string = '';
  @Input() price: string = '';
  @Input() description: string = ''; 
  @Input() location: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
