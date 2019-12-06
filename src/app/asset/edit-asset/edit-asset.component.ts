import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AssetService } from '../../shared/services/asset.service';

@Component({
  selector: 'edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent implements OnInit {

  angForm: FormGroup;
  asset: any = {};

  /**
   * Constructor.
   * @param route 
   * @param router 
   * @param bs 
   * @param fb 
   */
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private as: AssetService, 
    private fb: FormBuilder) {
      this.createForm();
  }

  /**
   * On init.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.as.editAsset(params['id']).subscribe(res => {
        this.asset = res;
      });
    });
  }

  /**
   * Create form.
   */
  createForm() {
    this.angForm = this.fb.group({
        code: ['', Validators.required ],
        name: ['', Validators.required ],
        owner: ['', Validators.required ]
      });
    }

  /**
   * Update asset.
   * @param code
   * @param name 
   * @param owner 
   */
  updateAsset(code, name, owner) {
    this.route.params.subscribe(params => {
      this.as.updateAsset(params['id'], code, name, owner);
      this.router.navigate(['asset']);
    });
  }
}
