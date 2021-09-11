import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() contentList: any[] = [];

  constructor(private communicator: CommunicationService) { }

  ngOnInit(): void {}

  switchToPage(pageName: string){
    this.communicator.inform('switchPage', pageName)
  }
  

}
// <li *ngFor="let item of contentList" (click)="switchToPage(item.content)">{{item.title}}</li>