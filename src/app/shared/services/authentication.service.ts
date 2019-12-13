import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../data/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uri = 'http://localhost:4000/user/';

  /**
   * Constructor.
   * @param http 
   */
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router, ) { 
  }

  /**
   * Login.
   * @param name 
   * @param password 
   */
  login(name, password) {
    let user = { "name" : name, "password" : password };
    let cache = localStorage.getItem("current");
    if (!cache)
    {
      this.http.post(this.uri + "login", user).subscribe(res => { 
        let current = new User (res[0]);
        console.log(current.name + " has successfully signed in.");
        if (res) {
          localStorage.setItem("current", JSON.stringify(current));
          this.router.navigate(['./home']);
        }; 
      });
    }
    else {
      let current = new User (JSON.parse(cache));
      console.log (current.name + " is already logged in.");
      this.router.navigate(['./home']);
    }    
  }

  /**
   * Logout.
   */
  logout(){    
    localStorage.removeItem("current");    
    this.router.navigate(['./authentication']);
  }

  /**
   * Register.
   * @param name 
   * @param password 
   */
  register(username, name, email, password, confirmation, address, city, state, zip)  {

    let user = { 
      "username" : username,
      "name" : name, 
      "email" : email, 
      "password" : password,
      "confirmation" : confirmation, 
      "address" : address, 
      "city" : city, 
      "state" : state,
      "zip" : zip 
    }   

    this.http.post(this.uri + "add", user)
          .subscribe(res => console.log('Done'));
  }
}
