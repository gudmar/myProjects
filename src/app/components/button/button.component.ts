import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() caption: string = '';
  maxCaptionLength = 15;
  get shortenedCaption(){
    if (this.caption.length <= this.maxCaptionLength) return this.caption;
    return this.caption.substring(0, this.maxCaptionLength-3) + '...'
  }
  tooLongCaption(){return this.caption.length > this.maxCaptionLength}
  constructor() { }

  ngOnInit(): void {
  }

  getImagePath(imageName:string){
    return `../../../../assets/${imageName}`
  }

}
// <div class="custom-button">
//     {{shortenedCaption}}
//     <div *ngIf="tooLongCaption()" class="tool-tip">
//         {{caption}}
//     </div>
// </div>