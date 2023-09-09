import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditFetcherComponent } from './components/reddit-fetcher/reddit-fetcher.component';
import { PostProducerComponent } from './components/post-producer/post-producer.component';
import { PostsDirectiveComponent } from './components/posts-directive/posts-directive.component';



@NgModule({
  declarations: [
    RedditFetcherComponent,
    PostProducerComponent,
    PostsDirectiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RedditFetcherComponent,
    PostProducerComponent,
    PostsDirectiveComponent
  ],


})
export class InfoFetchModule { }
