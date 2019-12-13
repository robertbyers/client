import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { AssetService } from '../../shared/services/asset.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 

  title = 'Digital Asset Library';

  /**
   * Contructor.
   * @param router 
   * @param as 
   */
  constructor(
    private router: Router, 
    private as: AssetService) {
    this.router.events.subscribe((event: Event) => {
    });
  }

  /**
   * On init.
   */
  ngOnInit() {
  }
}
