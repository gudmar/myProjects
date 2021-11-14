import { Component, OnInit, HostListener } from '@angular/core';
import { AnimateQueueService } from '../../services/animate-queue.service';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'animation',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
// @Input() singleRectangleSize: number = 100;
// @Input() showAllRectanglesAfter_us = 1000;
// @Input() hideAllRectanglesAfter_us = 2500;
// @Input() showHideAllDurationTimePeriod_us = {
export class AnimationsComponent implements OnInit {
  displayRectangles:boolean=false;
  displayWelcomeText:boolean = false;
  welcomeMessage: string = "Hello, welcome to my demo page."
  shouldDisplay: boolean = true;
  uniqueId: string = 'animationId';

  displayParameters = {
    singleRectangleSize: 100,
    // showAllRectanglesAfter_us: 1000, // NOT NEEDED, should start instantly, as it is controlled in chain of animations
    hideAllRectanglesAfter_us: 2500,
    showHideAllRectanglesDurationTimeStart_us: 800,
    showHideAllRectanglesDurationTimeEnd_us: 1200,
    displayNextLetterInterval: 90
  }

  get showHIdeAllRectanglesDurationPeriod() {
    return {
      start: this.displayParameters.showHideAllRectanglesDurationTimeStart_us,
      end:   this.displayParameters.showHideAllRectanglesDurationTimeEnd_us
    }
  }

  constructor(
    private animator: AnimateQueueService,
    private communicator: CommunicationService
  ) { 
    this.communicator.subscribe(this.uniqueId, this.handleMessages.bind(this), ['hideAnimation'])
  }
  handleMessages(eventType: string, data:any){
    this.shouldDisplay = false;
  }

  ngOnInit(): void {
    this.manageAnimation();
  }

  @HostListener('click')
  hideAnimation(){
    this.shouldDisplay = false;
  }

  calculateWelcomeTextAnimationTime(){
    return this.welcomeMessage.length * this.displayParameters.displayNextLetterInterval;

  }
  calcualteDiaplayTimeOfAllRectangles(){
    let cssTransitionDurationOfSingleRectangle = 1000;
    let hardCodedOffsetForShowingRectanglesStart = 0;
    let maxAnimationDurationOfSingleRectangle = this.showHIdeAllRectanglesDurationPeriod.end;
    let additionalExperimentalDelay = 800; // Rectangles are created slower than expected !! Angular or HW issue?
                                          // size of rectangle 120 additionalExperimantalDelay = 300 is optimum
    return cssTransitionDurationOfSingleRectangle + 
           maxAnimationDurationOfSingleRectangle + 
           hardCodedOffsetForShowingRectanglesStart + additionalExperimentalDelay;
  }

  manageAnimation(){
    this.animator.animate(
      {fn: this.showWelcomeText.bind(this), delay: 0},
      {fn: this.showRectangles.bind(this), delay: this.calculateWelcomeTextAnimationTime()}, //2500
      {
        fn: this.hideWelcomeText.bind(this), 
        delay: this.calcualteDiaplayTimeOfAllRectangles()// + this.calculateWelcomeTextAnimationTime()
      },
      {fn: this.hideRectangles.bind(this), delay: this.displayParameters.hideAllRectanglesAfter_us + this.calculateWelcomeTextAnimationTime()}, // 1500
      
    )
  }

  showRectangles(){this.displayRectangles=true;}
  hideRectangles(){this.displayRectangles=false;}
  showWelcomeText(){this.displayWelcomeText = true;}
  hideWelcomeText(){this.displayWelcomeText=false;}

}
// singleRectangleSize: 100,
// showAllRectanglesAfter_us: 1000,
// hideAllRectanglesAfter_us: 2500,
// showHideAllRectanglesDurationTimeStart_us: 800,
// showHideAllRectanglesDurationTimeEnd_us: 1200,
// displayNextLetterInterval: 90