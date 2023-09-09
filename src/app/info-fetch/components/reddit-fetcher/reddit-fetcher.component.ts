import { Component, OnInit, Input, Injector, ViewChild, ViewContainerRef, createComponent, ApplicationRef, EnvironmentInjector } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/interfaces/post';
import { PostProducerComponent } from '../post-producer/post-producer.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-reddit-fetcher',
  templateUrl: './reddit-fetcher.component.html',
  styleUrls: ['./reddit-fetcher.component.css']
})



export class RedditFetcherComponent {
  @ViewChild('container', { read: ViewContainerRef }) container !: ViewContainerRef;
  // @Input() 
  limit: number = 5;
  constructor(private http: HttpClient, private injector: EnvironmentInjector) { }
  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.container = viewContainerRef
  }

  createPostArray(data: any) {
    let postArray: Array<Post> = [];
    let postsData: any = data["data"]["children"];
    for (let i = 0; i < this.limit; i++) {
      const tempPost: Post =
      {
        // if(postsData[i]["isGallery"])
        //continue;
        author: postsData[i]["data"]["author"],
        authorImgSrc: postsData[i]["data"]["thumbnail"],
        title: postsData[i]["data"]["title"],
        likes: postsData[i]["data"]["ups"],
        dislikes: postsData[i]["data"]["downs"],
        postText: postsData[i]["data"]["selftext"] || "",
        // if (postsData[i]["data"]["post_hint"] && postsData[i]["data"]["post_hint"] == "image") {
        postMediaSrc: postsData[i]["data"]["url"] || ""
        // }
      }
      postArray.push(tempPost);
    }
    return postArray;
  }
  public makeRequest() {
    let headers = new HttpHeaders({});
    this.http.get<any>('https://www.reddit.com/search.json?q=ferrari&sort=new&limit=' + this.limit,
      { headers: headers }).subscribe(async (data) => {
        console.log(data);

        const postArray = this.createPostArray(data);
        // this.container.createComponent(PostProducerComponent, undefined).setInput("posts", postArray);
        // const applicationRef = await bootstrapApplication(RedditFetcherComponent);
        // const environmentInjector = applicationRef.injector;
        const postRef = createComponent(PostProducerComponent, { environmentInjector: this.injector });

        postRef.setInput('posts', postArray);

        // applicationRef.attachView(postRef.hostView);
        // postRef.changeDetectorRef.detectChanges();

      });
  }
  ngAfterViewInit() {
    console.log('epsum');
  }
  ngOnInit(): void {
    // this.makeRequest();
  }
}