import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemPrice } from 'src/app/models/searchResponse';

enum CurrencyTypes {
  'Peso' = 'ARS',
  'Dolar' = 'USD'
}

@Component({
  selector: 'price-label',
  templateUrl: './price-label.component.html',
  styleUrls: ['./price-label.component.sass']
})
export class PriceLabelComponent implements OnInit, OnChanges {
  @Input() price!: ItemPrice;
  @Input() type: string = 'normal';
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
        result = '$';
        break;
      case CurrencyTypes.Dolar:
        result = 'u$s ';
        break
      default:
        result = currency;
        break;
    }

    return result;
  }

}
