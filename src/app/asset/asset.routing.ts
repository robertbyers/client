import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAssetComponent } from './add-asset/add-asset.component';
import { GetAssetsComponent } from './get-assets/get-assets.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

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
  },
  {
    path: 'asset/upload',
    component: DragDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AssetRoutingModule { }
