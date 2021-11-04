import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'images-in-a-row',
  templateUrl: './images-in-a-row.component.html',
  styleUrls: ['./images-in-a-row.component.scss']
})
export class ImagesInARowComponent implements OnInit {
  @Input() imageList:any;
  @Input() maxHeight:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
