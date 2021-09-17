import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { CommunicationService } from '../../../services/communication-service.service';
import { GetRandomColorService } from '../../../services/get-random-color.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'rectangles',
  templateUrl: './rectangles.component.html',
  styleUrls: ['./rectangles.component.scss']
})
export class RectanglesComponent implements OnInit {
  @Input() singleRectangleSize: number = 100;
  shouldDisplay: boolean = true;
  uniqueId: string = 'rectanglesId'
  rectangleList: any[] = [];
  constructor(
    private communicator: CommunicationService,
    private elRef: ElementRef,
    private colors: GetRandomColorService
  ) { 
    communicator.subscribe(this.uniqueId, this.handleMessages.bind(this), ['displayRectangleAnimation'])
  }
  handleMessages(eventType: string, data: any){
    if (eventType == 'displayRectangleAnimation'){
      this.shouldDisplay = true;
    }
  }

  ngOnInit(): void {
    this.fillRectangleList();
    this.animate();
  }

  fillRectangleList(){
    let nrOfRectangles = this.calculateNrOfRectangles(this.singleRectangleSize);
    let colors = this.colors.getRandomColorArray(nrOfRectangles);
    for(let i = 0; i < nrOfRectangles; i++){
      this.rectangleList.push({color: colors[i]})
    }
  }

  calculateNrOfRectangles(rectangleSize: number){
    let width = this.elRef.nativeElement.offsetWidth;
    let height = this.elRef.nativeElement.offsetHeight;
    let nrOfRows = Math.ceil(parseInt(width) / this.singleRectangleSize);
    let nrOfCols = Math.ceil(parseInt(height) / this.singleRectangleSize);
    return nrOfCols * nrOfRows * 1.5;
  }



  animate(){

  }

}
// *ngFor="let rectangle of rectangleList"
// [size] = "singleRectangleSize"
// [color] = "rectangle.color"
// [shouldBlank] = "false"