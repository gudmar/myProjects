import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-article',
  templateUrl: './document-article.component.html',
  styleUrls: ['./document-article.component.scss', '../../../../src/styles.scss']
})
export class DocumentArticleComponent implements OnInit {
  @Input() title:string='';
  @Input() content:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
