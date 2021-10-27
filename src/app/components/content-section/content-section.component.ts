import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication-service.service';
import { GetServiceByDistinguishedNameService } from '../../services/content/get-service-by-distinguished-name.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {
  private _startPage:string = '';
  @Input() set startPage(val:string){
    this._startPage=val;
    this.currentlyDisplayed = val;
    console.log(this.currentlyDisplayed)
  }
  get startPage(){return this._startPage;}
  uniqueId = "contentSectionId";
  currentlyDisplayed: string = this.startPage;
  constructor(
    private communicator:CommunicationService,
    private getService: GetServiceByDistinguishedNameService,
    private route: ActivatedRoute
  ) { 
    communicator.subscribe(this.uniqueId, this.messageHandler.bind(this), ['turnThePage'])
  }

  messageHandler(eventType:string, data:any){
    if(eventType=="turnThePage"){
      this.currentlyDisplayed = data;
    }
  }

  ngOnInit(): void {
    this.currentlyDisplayed = this.startPage;
    this.route.data.subscribe(data=>{
      this.startPage = data.startPage;
      this.communicator.inform('activeRoute', data.startPage);
    })
  }

  getContent(pageDN:string){
    let a =this.getService.getServiceContentByDN(pageDN);
    return this.getService.getServiceContentByDN(pageDN);
  }

  contentList:any[] = this.getService.getAllContent();
  
  

}
