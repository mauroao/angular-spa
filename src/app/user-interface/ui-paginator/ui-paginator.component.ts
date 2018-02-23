import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'ui-paginator',
  templateUrl: './ui-paginator.component.html',
  styleUrls: ['./ui-paginator.component.css']
})
export class UiPaginatorComponent implements OnInit, OnChanges {

  @Input('current-page') currentPage: number;
  @Input('links-count') linksCount: number;
  @Input('last-page') lastPage: number;

  @Output() onLinkClicked = new EventEmitter<number>(); 

  links: number[] = [];

  constructor() { }

  ngOnInit() {

  }

  onClickLink(event, _page) {
    event.preventDefault();

    this.onLinkClicked.emit(_page);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let firstPage = 1;
            
    this.links = [];
    this.links.push(this.currentPage);

    let left = this.currentPage;
    let right = this.currentPage;

    while(this.links.length < this.linksCount) {
        if (right < this.lastPage) {
            right++;
            this.links.push(right);
        }

        if (left > firstPage) {
            left--;
            this.links.unshift(left);
        }

        if (right >= this.lastPage && left <= firstPage) {
            break;
        }
    };
  }

}
