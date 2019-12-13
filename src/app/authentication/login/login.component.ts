import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'login.component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    private as: AuthenticationService) {
    this.createForm();
  }

  /**
   * On init.
   */
  ngOnInit() {    
    let cache = localStorage.getItem("current");
    if (cache) {      
      console.log("User is already logged in. Automatically routing to home.");
      this.router.navigate(['./home']);
    }
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
    this.as.login(name, password);  
  }  
}
