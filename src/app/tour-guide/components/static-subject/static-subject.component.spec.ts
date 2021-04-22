import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSubjectComponent } from './static-subject.component';

describe('StaticSubjectComponent', () => {
  let component: StaticSubjectComponent;
  let fixture: ComponentFixture<StaticSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
