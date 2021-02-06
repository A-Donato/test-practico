import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  handleOnSearch(searchText: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {'q': searchText}
    }

    this.router.navigate(['/items'], navigationExtras);
  }

}
