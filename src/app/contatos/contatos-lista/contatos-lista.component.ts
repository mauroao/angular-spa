import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  currentPage: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onLinkClicked(_page: number) {
    this.currentPage = _page;
  }

}
