import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'register.component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  }

  /**
   * Create form.
   */
  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      name: ['', Validators.required ],
      password: ['', Validators.required ],
      confirmation: ['', Validators.required ],
      email: ['', Validators.required ],
      address: ['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ],
      zip: ['', Validators.required ],
    });
  }

  /**
   * Register.
   * @param username
   * @param name
   * @param address 
   * @param role 
   * @param password 
   * @param email 
   * @param address
   * @param city
   * @param state
   * @param zip 
   */
  register(username, name, email, password, confirmation, address, city, state, zip) {
    if (password == confirmation) {
      this.as.register(username, name, email, password, confirmation, address, city, state, zip);
      this.router.navigate(['authentication']);
    }
  }  

}
