import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getUserAvatar();
  }
  getUserAvatar() {
    let headers = new HttpHeaders({});
    this.http.get<any>("https://www.reddit.com/user/" + this.post.author + "/about.json",
      { headers: headers }).subscribe((data) => {
        this.post.authorImgSrc = data["data"]["icon_img"].includes("?") ? data["data"]["icon_img"].split("?")[0] : data["data"]["icon_img"];
      });
  }
}
