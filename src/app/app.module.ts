import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoFetchModule } from './info-fetch/info-fetch.module';
import { PostUiModule } from './post-ui/post-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfoFetchModule,
    PostUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
