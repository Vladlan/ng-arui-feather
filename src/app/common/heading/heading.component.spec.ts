import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heading } from './heading.component';

describe('Heading', () => {
  let component: Heading;
  let fixture: ComponentFixture<Heading>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heading ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
