import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosService} from './contatos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ContatosService
  ]
})
export class ApiModule { }
