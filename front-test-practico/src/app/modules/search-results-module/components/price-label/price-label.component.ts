import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemPrice } from 'src/app/models/searchResponse';

enum CurrencyTypes {
  'Peso' = 'ARS'
}

@Component({
  selector: 'price-label',
  templateUrl: './price-label.component.html',
  styleUrls: ['./price-label.component.sass']
})
export class PriceLabelComponent implements OnInit, OnChanges {
  @Input() price!: ItemPrice;
  currencySymbol: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.currencySymbol = this.parseCurrencyToSymbol(this.price.currency);
  }

  private parseCurrencyToSymbol(currency: string) {
    let result = '';
    switch (currency) {
      case CurrencyTypes.Peso:
        result = '$'
        break;
    
      default:
        break;
    }

    return result;
  }

}
