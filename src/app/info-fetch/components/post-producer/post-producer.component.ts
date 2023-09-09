import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostComponent } from 'src/app/post-ui/components/post/post.component';
// import { RedditFetcherComponent } from '../reddit-fetcher/reddit-fetcher.component';


@Component({
  selector: 'app-post-producer',
  templateUrl: './post-producer.component.html',
  styleUrls: ['./post-producer.component.css']
  // template: `<div class="container">
  //   <ng-template postProducer></ng-template>
  //   <button (click)="getPost()">Next Post</button>
  // </div>`
})
export class PostProducerComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  postIndex: number = 0;
  @Input() posts: Post[] = [];

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    const currentPostIndex = this.postIndex % this.posts.length;
    this.container.createComponent(PostComponent).setInput('post', this.posts[0]);
    this.postIndex += 1;
  }
}
