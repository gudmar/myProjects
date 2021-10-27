import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  uniqueId = "navigationId"
  private _startPage:string = '';
  @Input() contentList: any[] = [];
  @Input() set startPage(val:string){
    this._startPage = val;
    this.currentlySelectedItem = val;
  }
  get startPage() {return this._startPage;}
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


  constructor(
    private communicator: CommunicationService,
  ) { }


  ngOnInit(): void {
    this.currentlySelectedItem = this.startPage;
    this.communicator.subscribe(this.uniqueId, this.messageHandler.bind(this), ['turnThePage', 'activeRoute'])
  }

  ngOnDestroy(): void {
    this.communicator.unsubscribe(this.uniqueId);
  }

  messageHandler(eventType: string, data:any){
    if (eventType == 'turnThePage'){
      if (!this.isSupportedMenuEntry(data)) this.currentlySelectedItem = '';
    }
    if (eventType == 'activeRoute'){
      if (this.isLabelInContentList(data)) this.currentlySelectedItem = data;
      else this.currentlySelectedItem = '';
    }
  }

  isLabelInContentList(label:string){
    let listOfLabels = this.getListOfLabels();
    let singleMatch = function(element:string){return label == element}
    return listOfLabels.findIndex(singleMatch) == -1?false:true;
  }
  getListOfLabels(){
    let output = [];
    for(let item of this.contentList) output.push(item.content)
    return output;
  }

  switchToPage(pageName: string){
    this.communicator.inform('switchPage', pageName)
    console.error('This does not do anything')
  }

  selectButton(label: string){
    this.currentlySelectedItem = label;
  }

  informAboutPageTurning(pageTitle:string){
    this.communicator.inform('turnThePage', pageTitle)
  }
  

}
// <li *ngFor="let item of contentList" (click)="switchToPage(item.content)">{{item.title}}</li>