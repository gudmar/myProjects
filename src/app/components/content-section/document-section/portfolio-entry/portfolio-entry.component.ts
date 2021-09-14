import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.scss']
})
export class PortfolioEntryComponent implements OnInit {
  @Input() title: string = '';
  @Input() imageName: string = '';
  @Input() content: string = '';
  imagePath:string = this.getImagePath(this.imageName)
  constructor() { }

  ngOnInit(): void {
    this.imagePath = this.getImagePath(this.imageName)
  }


  getImagePath(imageName:string):string{
    return `../../../../assets/${imageName}`
  }
}
