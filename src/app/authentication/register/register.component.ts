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
      name: ['', Validators.required ],
      title: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required ],
      confirmation: ['', Validators.required]
    });
  }

  /**
   * Register.
   * @param name 
   * @param password 
   */
  register(name, title, company, address, password) {
    this.as.register(name, title, company, address, password);
    this.router.navigate(['authentication/login']);
  }  

}
