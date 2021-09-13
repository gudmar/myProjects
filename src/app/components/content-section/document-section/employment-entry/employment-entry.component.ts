import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'employment-entry',
  templateUrl: './employment-entry.component.html',
  styleUrls: ['./employment-entry.component.scss']
})
export class EmploymentEntryComponent implements OnInit {
  @Input() position:string = '';
  @Input() content: any[] = [];
  @Input() title: string = '';
  @Input() dates: string = '';
  @Input() subtitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
