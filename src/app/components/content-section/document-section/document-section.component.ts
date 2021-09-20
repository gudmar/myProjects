import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'document-section',
  templateUrl: './document-section.component.html',
  styleUrls: ['./document-section.component.scss']
})
export class DocumentSectionComponent implements OnInit {
  @Input() contentList: any[]=[];
  constructor() { }

  ngOnInit(): void {
    console.dir(this.contentList)
  }

  imagePath(imageName:string):string{
    return `../../../assets/${imageName}`
  }
}
