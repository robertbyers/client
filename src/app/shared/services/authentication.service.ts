import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uri = 'http://localhost:4000/user/';

  /**
   * Constructor.
   * @param http 
   */
  constructor(private http: HttpClient) { 
  }

  /**
   * 
   * @param name 
   * @param password 
   */
  login(name, password) {
    
    // VERIFY LOGIN CREDENTIALS
    return this.http.post(this.uri +"login", {name, password})
  }

  /**
   * Register.
   * @param name 
   * @param password 
   */
  register(name, title, company, address, password) {

    // EXTEND THE PARAMETER LIST TO SAVE MORE REGISTRATION INFORMATION

    let user = { "name" : name, "title" : title, "company" : company, "address" : address, "password" : password }      
    this.http.post(this.uri + "add", user)
          .subscribe(res => console.log('Done'));
  }


}
