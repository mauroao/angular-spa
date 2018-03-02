import { Component, OnInit } from '@angular/core';

import { ContatosService } from '../../api/contatos.service';

@Component({
  selector: 'contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  nameFilter: string = '';

  data = {
    pageNumber: 1,
    paginatedData: [],
    totalCount: 1,
    totalPages: 1
  };

  constructor(private contatosService: ContatosService) { }

  getContatos(page: number) {
    this.contatosService.getContatos(page, this.nameFilter).subscribe(data => this.data = data);    
  }
 
  ngOnInit() {
    this.getContatos(1);
  }

  onLinkClicked(page: number) {
    this.getContatos(page);
  }

}
