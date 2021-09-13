import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication-service.service';
import { GetServiceByDistinguishedNameService } from '../../services/content/get-service-by-distinguished-name.service';

@Component({
  selector: 'content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {
  @Input() startPage: string = '';
  uniqueId = "contentSectionId";
  currentlyDisplayed: string = this.startPage;
  constructor(
    private communicator:CommunicationService,
    private getService: GetServiceByDistinguishedNameService
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
  }

  getContent(pageDN:string){
    let a =this.getService.getServiceContentByDN(pageDN);
    return this.getService.getServiceContentByDN(pageDN);
  }

}
