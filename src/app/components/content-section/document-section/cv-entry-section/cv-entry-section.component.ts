import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-entry-section',
  templateUrl: './cv-entry-section.component.html',
  styleUrls: ['./cv-entry-section.component.scss']
})
export class CvEntrySectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.content)
  }

}
