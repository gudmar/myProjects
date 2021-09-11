import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss'], //, '../../../styles.scss'
  
})
export class HeadSectionComponent implements OnInit {
  @Input() title:string = '';
  @Input() subtitle:string = '';
  @Input() imageName:string = '';
  @Input() menuContent:any[] = [];
  constructor() { }

  ngOnInit(): void {
    let path = this.getImagePath(this.imageName)
    // debugger
  }
  getImagePath(imageName:string){
    return `../../../../assets/${imageName}`
  }
}
