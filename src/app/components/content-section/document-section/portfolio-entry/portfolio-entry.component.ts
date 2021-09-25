import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../../../services/communication-service.service';
import { ImagePathGettingService } from '../../../../services/image-path-getting.service';

@Component({
  selector: 'portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.scss']
})
export class PortfolioEntryComponent implements OnInit {
  @Input() title: string = '';
  // @Input() imageName: string = '';
  @Input() imageNameArray: string[] = [];
  @Input() content: string = '';
  // imagePath:string = this.getImagePath(this.imageName)
  constructor(
    private communicator: CommunicationService,
    private imagePathGetter: ImagePathGettingService
  ) { }

  ngOnInit(): void {
    // this.imagePath = this.getImagePath(this.imageName)
  }


  // async getImagePath(imageName:string){
  //   return await this.imagePathGetter.getImagePath(imageName, 4);
  //   // return `../../../../assets/${imageName}`
  // }

  switchToPage(title:string){
    this.communicator.inform('turnThePage', title)
  }
}
