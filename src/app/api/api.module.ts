import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'

import { ConfigModule } from './../config/config.module';
import { ContatosService} from './contatos.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ConfigModule
  ],
  declarations: [],
  providers: [
    ContatosService
  ]
})
export class ApiModule { }
