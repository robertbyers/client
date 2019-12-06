import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  uri = 'http://localhost:4000/asset/';

  /**
   * Constructor.
   * @param http 
   */
  constructor(private http: HttpClient) { 
  }

  /**
   * Add asset.
   * @param code 
   * @param name 
   * @param owner 
   */
  addAsset(code, name, owner) {
    // console.log("addAsset: code" + code);
    let asset = { "code" : code, "name" : name, "owner" : owner }      
    this.http.post(this.uri + "add", asset)
          .subscribe(res => console.log('Done'));
  }

  /**
   * Delete asset.
   * @param id 
   */
  deleteAsset(id) {
    console.log("Deleting asset id: " + id);
    return this.http.get(this.uri + "delete" + "/" + id);
  }

  /**
   * Edit asset.
   * @param id 
   */
  editAsset(id) {
    return this.http.get(this.uri + "edit" + "/" + id);
  }

  /**
   * Get assets.
   */
  getAssets() {
    return this.http.get(this.uri);
  }

  /**
   * Update asset.
   * @param code 
   * @param name 
   * @param owner 
   * @param id 
   */
  updateAsset(id, code, name, owner) {
    const asset = { code: code, name: name, owner: owner };
    this.http.post(this.uri + "update" + "/" + id, asset)
      .subscribe(res => console.log('Done'));
  }
}
