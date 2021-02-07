import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ItemPrice } from 'src/app/models/searchResponse';

@Component({
  selector: 'search-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.sass']
})
export class ResultItemComponent implements OnInit {
  @Input() imageSrc: string = '';
  @Input() price!: ItemPrice;
  @Input() title: string = ''; 
  @Input() location: string = ''; 
  @Input() itemId: string = ''; 


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.route.navigate([`items/${this.itemId}`])
  }

}
