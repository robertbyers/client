import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AssetService } from '../../shared/services/asset.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Observable } from 'rxjs';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'login.component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  errorMsg: string = "";
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
    private as: AuthenticationService) {
      this.createForm();
  }

  /**
   * On init.
   */
  ngOnInit() {
  }

  /**
   * Create form.
   */
  createForm() {
    this.angForm = this.fb.group({
      name: ['Username', Validators.required ],
      password: ['Password', Validators.required ]
    });
  }

  /**
   * Login.
   * @param name 
   * @param password 
   */
  login(name, password) {

    // WRITE YOUR CODE HERE.
    let meh = false;
    this.as.login(name, password).subscribe(
            data => {
               // refresh the list
              console.log('Done', data);
              this.router.navigate(['asset']);
             },
             error => {
               console.error("Error saving food!");
               this.errorMsg = "Wrong password/user name."
             }
    );
    
    //this.router.navigate(['asset']);
  }  
}
