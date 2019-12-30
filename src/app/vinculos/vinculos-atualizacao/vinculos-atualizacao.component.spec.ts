import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculosAtualizacaoComponent } from './vinculos-atualizacao.component';

describe('VinculosAtualizacaoComponent', () => {
  let component: VinculosAtualizacaoComponent;
  let fixture: ComponentFixture<VinculosAtualizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculosAtualizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculosAtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
