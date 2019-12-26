import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button.component';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Button ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
