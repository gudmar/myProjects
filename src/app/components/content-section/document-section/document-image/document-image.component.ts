import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-image',
  templateUrl: './document-image.component.html',
  styleUrls: ['./document-image.component.scss','../../../../styles.scss']
})
export class DocumentImageComponent implements OnInit {
  @Input() imageAlt:string="";
  @Input() imageName:string="";
  get imagePath():string{
    return `../../../../assets/${this.imageName}`
  }
  constructor() { }

  ngOnInit(): void {
  }

}
