import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { AssetService } from './shared/services/asset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

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
