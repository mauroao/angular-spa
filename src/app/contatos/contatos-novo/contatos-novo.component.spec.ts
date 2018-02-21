import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosNovoComponent } from './contatos-novo.component';

describe('ContatosNovoComponent', () => {
  let component: ContatosNovoComponent;
  let fixture: ComponentFixture<ContatosNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
