import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticChapterComponent } from './static-chapter.component';

describe('StaticChapterComponent', () => {
  let component: StaticChapterComponent;
  let fixture: ComponentFixture<StaticChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
