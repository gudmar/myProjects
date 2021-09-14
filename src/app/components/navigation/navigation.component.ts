import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  uniqueId = "navigationId"
  @Input() contentList: any[] = [];
  @Input() startPage: string = ''
  get supportedMenuEntries(): string[] {
    let output: string[] = [];
    for (let item of this.contentList){
      output.push(item.title)
    }
    return output;
  }

  isSupportedMenuEntry(item: string){
    return this.supportedMenuEntries.findIndex((element) => {return item == element}) == -1?false:true
  }

  currentlySelectedItem: string = this.startPage;

  isButtonSelected(buttonLabel:string){
    return (buttonLabel == this.currentlySelectedItem) ? true : false;
  }


  constructor(private communicator: CommunicationService) { }

  ngOnInit(): void {
    this.currentlySelectedItem = this.startPage;
    this.communicator.subscribe(this.uniqueId, this.messageHandler.bind(this), ['turnThePage'])
  }

  messageHandler(eventType: string, data:any){
    if (eventType == 'turnThePage'){
      if (!this.isSupportedMenuEntry(data)) this.currentlySelectedItem = '';
    }
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