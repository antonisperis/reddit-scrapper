import { Component, OnInit, Input, Injector, ViewChild, ViewContainerRef, createComponent, ApplicationRef, EnvironmentInjector, TemplateRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/interfaces/post';
import { PostProducerComponent } from '../post-producer/post-producer.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-reddit-fetcher',
  styleUrls: ['./reddit-fetcher.component.css'],
  templateUrl: './reddit-fetcher.component.html',
  template: `
   
  `
})



export class RedditFetcherComponent {
  // @Input() 
  limit: number = 5;
  requestMade: boolean = false;
  constructor(private http: HttpClient, public container: ViewContainerRef) { }
  postsArray: Array<Post> = [];

  createPostArray(data: any) {
    this.postsArray = [];
    let postsData: any = data["data"]["children"];
    for (let i = 0; i < this.limit; i++) {
      const tempPost: Post =
      {
        author: postsData[i]["data"]["author"],
        authorImgSrc: "",
        title: postsData[i]["data"]["title"],
        likes: postsData[i]["data"]["ups"],
        dislikes: postsData[i]["data"]["downs"],
        postText: postsData[i]["data"]["selftext"] || "",
        postMediaSrc: postsData[i]["data"]["url"] || ""
      }
      if (postsData[i]["data"]["post_hint"] && postsData[i]["data"]["post_hint"] == "link")
        tempPost.postText += " " + postsData[i]["data"]["url"];
      this.postsArray.push(tempPost);
    }
    return this.postsArray;
  }
  public makeRequest() {
    let headers = new HttpHeaders({});
    this.http.get<any>('https://www.reddit.com/search.json?q=ferrari&sort=new&limit=' + this.limit,
      { headers: headers }).subscribe((data) => {
        console.log(data);

        const postArray = this.createPostArray(data);
        this.requestMade = true;
        // this.container.clear();
        // this.container.createComponent(PostProducerComponent).setInput("posts", postArray);

      });
  }
  ngAfterViewInit() {
  }
  ngOnInit(): void {
    // this.makeRequest();
  }
}