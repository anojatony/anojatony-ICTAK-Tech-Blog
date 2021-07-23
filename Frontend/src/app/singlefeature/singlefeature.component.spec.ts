import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefeatureComponent } from './singlefeature.component';

describe('SinglefeatureComponent', () => {
  let component: SinglefeatureComponent;
  let fixture: ComponentFixture<SinglefeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
