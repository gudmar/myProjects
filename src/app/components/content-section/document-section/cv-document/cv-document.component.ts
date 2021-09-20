import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-document',
  templateUrl: './cv-document.component.html',
  styleUrls: ['./cv-document.component.scss']
})
export class CvDocumentComponent implements OnInit {
  @Input() contentList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.dir(this.contentList)
    console.error('Whole CV component management must be located here for display table to work, or I dont fuck know :(')
  }

}
