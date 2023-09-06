import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditFetcherComponent } from './reddit-fetcher.component';

describe('RedditFetcherComponent', () => {
  let component: RedditFetcherComponent;
  let fixture: ComponentFixture<RedditFetcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedditFetcherComponent]
    });
    fixture = TestBed.createComponent(RedditFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
