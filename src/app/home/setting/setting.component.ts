import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

import { AssetService } from '../../shared/services/asset.service';

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit{ 

  title = 'Settings';

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
