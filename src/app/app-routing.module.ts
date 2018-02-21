import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ContatosDetalheComponent } from './contatos/contatos-detalhe/contatos-detalhe.component';
import { ContatosNovoComponent } from './contatos/contatos-novo/contatos-novo.component';
import { ContatosListaComponent } from './contatos/contatos-lista/contatos-lista.component';

const routes: Routes = [
  { path: 'contatos/novo', component: ContatosNovoComponent },
  { path: 'contatos/:id', component: ContatosDetalheComponent },
  { path: 'contatos', component: ContatosListaComponent },
  { path: '', redirectTo: '/contatos', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
