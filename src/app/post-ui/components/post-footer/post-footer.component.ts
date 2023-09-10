import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent {
  @Input() ups!: string;
  @Input() downs!: string;

}
