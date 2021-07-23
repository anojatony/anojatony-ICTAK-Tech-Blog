import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehomeComponent } from './singlehome.component';

describe('SinglehomeComponent', () => {
  let component: SinglehomeComponent;
  let fixture: ComponentFixture<SinglehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
