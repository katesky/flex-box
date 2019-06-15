import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsTreeSelectorComponent } from './regions-tree-selector.component';

describe('RegionsTreeSelectorComponent', () => {
  let component: RegionsTreeSelectorComponent;
  let fixture: ComponentFixture<RegionsTreeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsTreeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsTreeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
