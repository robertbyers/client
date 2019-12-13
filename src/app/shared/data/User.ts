export class User {
  username = "";
  name = "";
  email = "";
  password = "";
  confirmation = "";
  address = "";
  city = "";
  state = "";
  zip = "";


   /**
   * Constructor.
   * @param http 
   */
  constructor(json) {
    if (json != null && json != "") {
      this.username = json.username;
      this.name = json.name;
      this.email = json.email;
      this.password = json.password; 
      this.confirmation = json.confirmation;
      this.address = json.address;
      this.city = json.city;
      this.state = json.state;
      this.zip = json.zip;
    }
  }

}
