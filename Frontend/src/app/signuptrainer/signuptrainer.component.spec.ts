import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuptrainerComponent } from './signuptrainer.component';

describe('SignuptrainerComponent', () => {
  let component: SignuptrainerComponent;
  let fixture: ComponentFixture<SignuptrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuptrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuptrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
