import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent {
  @Input() title: String = '';
  @Input() author: String = '';
  @Input() authorImgSrc: String = '';
  constructor() { }
}
