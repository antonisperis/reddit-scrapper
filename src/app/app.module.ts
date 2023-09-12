import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RedditFetcherComponent } from './info-fetch/components/reddit-fetcher/reddit-fetcher.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoFetchModule } from './info-fetch/info-fetch.module';
import { SidetabsUiModule } from './sidetabs-ui/sidetabs-ui.module';
import { PostUiModule } from './post-ui/post-ui.module';
import { MainBodyModule } from './main-body/main-body.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostUiModule,
    InfoFetchModule,
    SidetabsUiModule,
    MainBodyModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
