import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { CommunicationService } from '../../../services/communication-service.service';
import { GetRandomColorService } from '../../../services/get-random-color.service';
import { timingSafeEqual } from 'crypto';
import { AnimateQueueService } from '../../../services/animate-queue.service';

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
    private colors: GetRandomColorService,
    private animator: AnimateQueueService
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
    this.showHideAnimation();
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

  showHide: 'show'|'hide' = 'show';

  show(){
    this.showHide= "show"
    console.log('show')
  }
  hide(){
    this.showHide= "hide"
    console.log('hide')
  }


  showHideAnimation(){
    this.animator.animate(
      {fn: this.show.bind(this), delay: 1000},
      {fn: this.hide.bind(this), delay: 2500}
    )
  }
  // animateMessage(){
  //   this.animator.animate(
  //     {fn: this.displayMessage.bind(this), delay: 0},
  //     {fn: this.animateBorder.bind(this), delay:10},
  //     {fn: this.stopComponent.bind(this), delay: 2000},
  //     {fn: this.clearAfterAnimation.bind(this), delay: 2100}
  //   )
  // }

  // showHideTimer(){
  //   let that = this;
  //   let s = setTimeout(()=>{
  //     that.showHide = 'show';
  //     let h = setTimeout(()=>{
  //       that.showHide = 'hide';
  //       clearTimeout(h);
  //     }, 6000)
  //     clearTimeout(h)
  //   }, 1000)
  // }

  animate(){

  }

}
// *ngFor="let rectangle of rectangleList"
// [size] = "singleRectangleSize"
// [color] = "rectangle.color"
// [shouldBlank] = "false"