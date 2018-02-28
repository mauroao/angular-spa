import { Component, OnInit } from '@angular/core';

import { ContatosService } from '../../api/contatos.service';

@Component({
  selector: 'contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  currentPage: number = 1;
  contatos = [];

  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
    this.contatos = this.contatosService.getContatos();
  }

  onLinkClicked(_page: number) {
    this.currentPage = _page;
  }

}
