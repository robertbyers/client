import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAssetComponent } from './add-asset/add-asset.component';
import { GetAssetsComponent } from './get-assets/get-assets.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';

const routes: Routes = [
  {
    path: 'asset',
    component: GetAssetsComponent
  },
  {
    path: 'asset/create',
    component: AddAssetComponent
  },
  {
    path: 'asset/edit/:id',
    component: EditAssetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AssetRoutingModule { }
