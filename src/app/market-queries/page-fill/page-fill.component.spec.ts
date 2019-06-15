import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AonPageFillComponent } from './page-fill.component';

describe('AonPageFillComponent', () => {
  let component: AonPageFillComponent;
  let fixture: ComponentFixture<AonPageFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AonPageFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AonPageFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
