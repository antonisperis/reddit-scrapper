import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostFooterComponent } from './components/post-footer/post-footer.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    PostHeaderComponent,
    PostFooterComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostHeaderComponent,
    PostFooterComponent,
    PostComponent
  ]
})
export class PostUiModule { }
