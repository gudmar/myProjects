import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'cv-entry-section',
  templateUrl: './cv-entry-section.component.html',
  styleUrls: ['./cv-entry-section.component.scss']
})
export class CvEntrySectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: any;
  isScreenSmall:boolean = false;
  widthToApplyClass:number = 1100;
  constructor() { }

  
  ngOnInit(): void {
    console.log(this.content)
    this.setIsScreenSmall();
  }

  @HostListener('window:resize', ['$event'])
  setIsScreenSmall(){
    let screenWidth = window.innerWidth;
    if (screenWidth < this.widthToApplyClass) this.isScreenSmall = true;
    else this.isScreenSmall = false;
  }

}
