import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMylessonComponent } from './static-mylesson.component';

describe('StaticMylessonComponent', () => {
  let component: StaticMylessonComponent;
  let fixture: ComponentFixture<StaticMylessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticMylessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticMylessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
