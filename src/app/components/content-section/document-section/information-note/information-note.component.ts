import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'information-note',
  templateUrl: './information-note.component.html',
  styleUrls: ['./information-note.component.scss']
})
export class InformationNoteComponent implements OnInit {
  @Input() severity:'info'|'warn'|'error'= 'info';
  @Input() content:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
