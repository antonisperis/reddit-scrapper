import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderComponent } from './components/post-header/post-header.component';
import { PostMainComponent } from './components/post-main/post-main.component';



@NgModule({
  declarations: [
    PostHeaderComponent,
    PostMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostHeaderComponent,
    PostMainComponent
  ]
})
export class PostUiModule { }
