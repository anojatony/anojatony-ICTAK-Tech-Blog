import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletrendingComponent } from './singletrending.component';

describe('SingletrendingComponent', () => {
  let component: SingletrendingComponent;
  let fixture: ComponentFixture<SingletrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
