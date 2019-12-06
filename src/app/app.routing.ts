import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetModule } from './asset/asset.module'
import { AuthenticationModule} from './authentication/authentication.module';

const routes: Routes = [
];

@NgModule({
  imports: [AssetModule,
    AuthenticationModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
