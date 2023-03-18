import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiontmentComponent } from './appiontment.component';

describe('AppiontmentComponent', () => {
  let component: AppiontmentComponent;
  let fixture: ComponentFixture<AppiontmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppiontmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppiontmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
