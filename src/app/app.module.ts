import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AnalyticsModule } from './analytics/analytics.module';
import { AppRoutingModule } from './app.routing';
import { AssetModule } from './asset/asset.module';
import { AssetService } from './shared/services/asset.service';

import { AppComponent } from './app.component';
import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';
import { DragDropComponent } from './asset/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AnalyticsModule,
    AppRoutingModule,
    AssetModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
