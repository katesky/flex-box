import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketQueriesComponent } from './market-queries.component';

describe('MarketQueriesComponent', () => {
  let component: MarketQueriesComponent;
  let fixture: ComponentFixture<MarketQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
