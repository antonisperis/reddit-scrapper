import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProducerComponent } from './post-producer.component';

describe('PostProducerComponent', () => {
  let component: PostProducerComponent;
  let fixture: ComponentFixture<PostProducerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostProducerComponent]
    });
    fixture = TestBed.createComponent(PostProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
