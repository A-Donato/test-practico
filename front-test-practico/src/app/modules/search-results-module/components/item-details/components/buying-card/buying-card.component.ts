import { Component, Input, OnInit } from '@angular/core';
import { ItemPrice } from 'src/app/models/searchResponse';

enum ItemConditions {
  New = 'new',
  Used = 'used'
}

@Component({
  selector: 'app-buying-card',
  templateUrl: './buying-card.component.html',
  styleUrls: ['./buying-card.component.sass']
})
export class BuyingCardComponent implements OnInit {
  @Input() price!: ItemPrice;
  @Input() title!: string;
  @Input() condition!: string;
  @Input() soldNumber!: number;

  itemConditionLabel!: string;

  constructor() { }

  ngOnInit(): void {
    this.itemConditionLabel = this.getItemCondition();
  }

  getItemCondition() {
    let result = '';
    
    switch (this.condition) {
      case ItemConditions.New:
        result = 'Nuevo' // I18n? 
        break;
      case ItemConditions.Used:
        result = 'Usado' // I18n?
        break;
      default:
        result = this.condition ? this.condition : '';
        break;
    }

    return result;
  }

}
