import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() dates: string = '';
  @Input() content: any[] = [];
  constructor() { }

  ngOnInit(): void {
    // debugger
  }
  getListFromNumber(nrOfItems:number){
    let output = [];
    for (let i = 0; i < nrOfItems; i++){output.push(i)}
    return output;
  }

  isStarFilled(skillLevel:number,index:number){
    return index<=skillLevel;
  }
}
