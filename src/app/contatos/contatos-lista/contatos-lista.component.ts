import { ConfigService } from './../../config/config.service';
import { Component, OnInit } from '@angular/core';

import { ContatosService } from '../../api/contatos.service';

@Component({
  selector: 'contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  nameFilter: string = '';
  apiVersion: string = '';
  appName: string = 'Lista Telefônica';

  data = {
    pageNumber: 1,
    paginatedData: [],
    totalCount: 1,
    totalPages: 1
  };

  constructor(private contatosService: ContatosService, private configService: ConfigService) { }

  getContatos(page: number) {
    this.contatosService.getContatos(page, this.nameFilter).subscribe(data => this.data = data);    
  }
 
  ngOnInit() {
    this.getContatos(1);
    this.apiVersion = this.configService.apiBaseUrl;
  }

  onLinkClicked(page: number) {
    this.getContatos(page);
  }

}
