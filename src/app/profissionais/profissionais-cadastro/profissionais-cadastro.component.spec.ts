import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisCadastroComponent } from './profissionais-cadastro.component';

describe('ProfissionaisCadastroComponent', () => {
  let component: ProfissionaisCadastroComponent;
  let fixture: ComponentFixture<ProfissionaisCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
