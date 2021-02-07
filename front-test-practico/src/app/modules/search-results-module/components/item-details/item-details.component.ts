import { SearchResultsService } from './../services/search-results.service';
import { Component, OnInit } from '@angular/core';
import { ItemInformation } from 'src/app/models/itemInformationResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.sass']
})
export class ItemDetailsComponent implements OnInit {
  selectedItem: ItemInformation | undefined = undefined;
  
  constructor(
    private searchResultsService: SearchResultsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.searchResultsService.searchItemInformation(itemId).subscribe( response => {
        this.selectedItem = response?.item;
      })
    }
  }

}
