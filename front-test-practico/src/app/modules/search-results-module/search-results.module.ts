import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultItemComponent } from './components/results-list/components/result-item/result-item.component';
import { PriceLabelComponent } from './components/price-label/price-label.component';
import { BuyingCardComponent } from './components/item-details/components/buying-card/buying-card.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [SearchResultsComponent, BreadcrumbComponent, ItemDetailsComponent, ResultsListComponent, ResultItemComponent, PriceLabelComponent, BuyingCardComponent],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    MatButtonModule
  ]
})
export class SearchModuleModule { }
