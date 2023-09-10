import { Component, Input, OnInit, ViewChild, ViewContainerRef, Injector, ApplicationRef } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostComponent } from 'src/app/post-ui/components/post/post.component';
import { RedditFetcherComponent } from '../reddit-fetcher/reddit-fetcher.component';
// import { RedditFetcherComponent } from '../reddit-fetcher/reddit-fetcher.component';

@Component({
  selector: 'app-post-producer',
  // templateUrl: './post-producer.component.html',
  styleUrls: ['./post-producer.component.css'],
  template: `<div >
     <div *ngFor="let post of posts">
    <post [post]="post"></post>
  </div>
  </div>`
})
export class PostProducerComponent implements OnInit {
  postIndex: number = 0;
  @Input() posts!: Post[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
