import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBarComponent } from './middle-bar.component';

describe('MiddleBarComponent', () => {
  let component: MiddleBarComponent;
  let fixture: ComponentFixture<MiddleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
