import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() contentList: any[] = [];
  @Input() startPage: string = ''
  currentlySelectedItem: string = this.startPage;

  isButtonSelected(buttonLabel:string){
    return (buttonLabel == this.currentlySelectedItem) ? true : false;
  }

  constructor(private communicator: CommunicationService) { }

  ngOnInit(): void {
    this.currentlySelectedItem = this.startPage;
  }

  switchToPage(pageName: string){
    this.communicator.inform('switchPage', pageName)
  }

  selectButton(label: string){
    this.currentlySelectedItem = label;
  }

  informAboutPageTurning(pageTitle:string){
    this.communicator.inform('turnThePage', pageTitle)
  }
  

}
// <li *ngFor="let item of contentList" (click)="switchToPage(item.content)">{{item.title}}</li>