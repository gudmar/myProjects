import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.scss']
})
export class PortfolioEntryComponent implements OnInit {
  title: string = '';
  imageName: string = '';
  content: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  imagePath(imageName:string):string{
    return `../../../../assets/${imageName}`
  }
}
