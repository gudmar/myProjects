import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'button',
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

}
// <div class="custom-button">
//     {{shortenedCaption}}
//     <div *ngIf="tooLongCaption()" class="tool-tip">
//         {{caption}}
//     </div>
// </div>