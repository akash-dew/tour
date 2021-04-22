import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMenuComponent } from './static-menu.component';

describe('StaticMenuComponent', () => {
  let component: StaticMenuComponent;
  let fixture: ComponentFixture<StaticMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
