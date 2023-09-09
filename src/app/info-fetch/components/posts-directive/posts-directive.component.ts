import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'posts-directive',
})
export class PostsDirectiveComponent {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
