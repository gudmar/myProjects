import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../../../services/communication-service.service';
import { ImagePathGettingService } from '../../../../services/image-path-getting.service';
// import { ActivatedRoute } from '@angular/router';

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
  // @Input() set route(val:any){console.log(val);}//: string = '';
  @Input() route:string = '';
  // imagePath:string = this.getImagePath(this.imageName)
  constructor(
    private communicator: CommunicationService,
    private imagePathGetter: ImagePathGettingService,
    // private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.imagePath = this.getImagePath(this.imageName)
    console.log()
  }


  // async getImagePath(imageName:string){
  //   return await this.imagePathGetter.getImagePath(imageName, 4);
  //   // return `../../../../assets/${imageName}`
  // }

  switchToPage(title:string){
    // this.communicator.inform('turnThePage', title)
  }
}
