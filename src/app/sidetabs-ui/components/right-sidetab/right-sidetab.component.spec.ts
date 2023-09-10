import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidetabComponent } from './right-sidetab.component';

describe('RightSidetabComponent', () => {
  let component: RightSidetabComponent;
  let fixture: ComponentFixture<RightSidetabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSidetabComponent]
    });
    fixture = TestBed.createComponent(RightSidetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
