import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPaginatorComponent } from './ui-paginator.component';

describe('UiPaginatorComponent', () => {
  let component: UiPaginatorComponent;
  let fixture: ComponentFixture<UiPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
