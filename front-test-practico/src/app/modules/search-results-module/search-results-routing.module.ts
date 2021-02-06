import { SearchResultsComponent } from './search-results.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ResultsListComponent } from './components/results-list/results-list.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
    children: [
      { path: '', component: ResultsListComponent },
      { path: ':id', component: ItemDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
