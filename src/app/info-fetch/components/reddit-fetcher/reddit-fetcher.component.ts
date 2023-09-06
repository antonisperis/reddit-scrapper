import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reddit-fetcher',
  templateUrl: './reddit-fetcher.component.html',
  styleUrls: ['./reddit-fetcher.component.css']
})
export class RedditFetcherComponent {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    let headers = new HttpHeaders({});
    this.http.get<any>('https://www.reddit.com/search.json?q=ferrari&sort=new&limit=5',
      { headers: headers }).subscribe(data => console.log(data));
  }
}