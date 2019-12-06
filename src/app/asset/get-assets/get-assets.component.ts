import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { AssetService } from '../../shared/services/asset.service';
import Asset from '../../shared/data/Asset';

@Component({
  selector: 'get-assets',
  templateUrl: './get-assets.component.html',
  styleUrls: ['./get-assets.component.css']
})
export class GetAssetsComponent implements OnInit {

  assets: Asset[];

  /**
   * Constructor.
   * @param bs 
   */
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private as: AssetService) { 
    
  }

  /**
   * On init.
   */
  ngOnInit() {    
    this.refresh();
  }

  /**
   * Delete asset.
   * @param id
   */
  deleteAsset(id) {
    this.as.deleteAsset(id).subscribe(res => {
    });
  }

  /**
   * Refresh the user interface.
   */
  refresh() {
    this.as.getAssets().subscribe((data: Asset[]) => {
      this.assets = data;
    }); 
  }
}
