import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { ApiModule } from './../api/api.module';
import { UserInterfaceModule } from '../user-interface/user-interface.module';

import { ContatosListaComponent } from './contatos-lista/contatos-lista.component';
import { ContatosNovoComponent } from './contatos-novo/contatos-novo.component';
import { ContatosDetalheComponent } from './contatos-detalhe/contatos-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserInterfaceModule,
    ApiModule
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
