import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidetabComponent } from './left-sidetab.component';

describe('LeftSidetabComponent', () => {
  let component: LeftSidetabComponent;
  let fixture: ComponentFixture<LeftSidetabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSidetabComponent]
    });
    fixture = TestBed.createComponent(LeftSidetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
