import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AssetRoutingModule } from './asset.routing';

import { AddAssetComponent } from './add-asset/add-asset.component';
import { GetAssetsComponent } from './get-assets/get-assets.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';

@NgModule({
  declarations: [
    AddAssetComponent,
    EditAssetComponent,
    GetAssetsComponent
  ],
  imports: [
    AssetRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AssetModule { }
