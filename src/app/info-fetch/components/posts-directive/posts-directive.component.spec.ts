import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDirectiveComponent } from './posts-directive.component';

describe('PostsDirectiveComponent', () => {
  let component: PostsDirectiveComponent;
  let fixture: ComponentFixture<PostsDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsDirectiveComponent]
    });
    fixture = TestBed.createComponent(PostsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
