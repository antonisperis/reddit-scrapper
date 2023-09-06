import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditFetcherComponent } from './components/reddit-fetcher/reddit-fetcher.component';



@NgModule({
  declarations: [
    RedditFetcherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RedditFetcherComponent
  ]
})
export class InfoFetchModule { }
