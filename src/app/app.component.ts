
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RedditFetcherComponent } from './info-fetch/components/reddit-fetcher/reddit-fetcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ``,
})
export class AppComponent {
  title = 'reddit-scrapper';
  constructor(private container: ViewContainerRef) {
    // this.createComponent();
  }
  createComponent() {
    this.container.clear();
    // const redditComponent = this.container.createComponent(RedditFetcherComponent);

  }
}
