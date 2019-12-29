import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTrainingDetailsComponent } from './online-training-details.component';

describe('OnlineTrainingDetailsComponent', () => {
  let component: OnlineTrainingDetailsComponent;
  let fixture: ComponentFixture<OnlineTrainingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineTrainingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
