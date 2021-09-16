import { Component, OnInit, Input } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons'

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
  filmIcon = faFilm;
  constructor() { }

  ngOnInit(): void {
    console.log(this.position)
  }

}
