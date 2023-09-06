import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMainComponent } from './post-main.component';

describe('PostMainComponent', () => {
  let component: PostMainComponent;
  let fixture: ComponentFixture<PostMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostMainComponent]
    });
    fixture = TestBed.createComponent(PostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
