import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule} from './home.routing';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    HomeComponent,
    SettingComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
