import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosListaComponent } from './contatos-lista/contatos-lista.component';
import { ContatosNovoComponent } from './contatos-novo/contatos-novo.component';
import { ContatosDetalheComponent } from './contatos-detalhe/contatos-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContatosListaComponent, 
    ContatosNovoComponent, 
    ContatosDetalheComponent
  ],
  exports:  [
    ContatosListaComponent, 
    ContatosNovoComponent, 
    ContatosDetalheComponent
  ]
})
export class ContatosModule { }
