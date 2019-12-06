import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AssetService } from '../../shared/services/asset.service';

@Component({
  selector: 'add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  angForm: FormGroup;

  /**
   * Constructor.
   * @param fb 
   * @param as 
   * @param http 
   */
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private fb: FormBuilder, 
    private as: AssetService) {
    this.createForm();
  }

  /**
   * On init.
   */
  ngOnInit() {
  }

  /**
   * Create form.
   * location => code
   * price => owner
   */
  createForm() {
    this.angForm = this.fb.group({
      location: ['', Validators.required ],
      name: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  /**
   * Add asset.
   * @param location 
   * @param name 
   * @param price 
   */
  addAsset(location, name, price) {
    this.as.addAsset(location, name, price);
    this.router.navigate(['asset']);
  }  
}
