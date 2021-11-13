import { Component, OnInit, HostListener } from '@angular/core';
import { AnimateQueueService } from '../../services/animate-queue.service';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'animation',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  displayRectangles:boolean=false;
  displayWelcomeText:boolean = false;
  welcomeMessage: string = "Hello, welcome to my demo page."
  displayNextInterval: number = 90;
  shouldDisplay: boolean = true;
  uniqueId: string = 'animationId';
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
    return this.welcomeMessage.length * this.displayNextInterval;

  }
  calcualteDiaplayTimeOfAllRectangles(){
    return 1700
  }

  manageAnimation(){
    this.animator.animate(
      {fn: this.showWelcomeText.bind(this), delay: 0},
      {fn: this.showRectangles.bind(this), delay: 2500},
      {
        fn: this.hideWelcomeText.bind(this), 
        delay: this.calcualteDiaplayTimeOfAllRectangles() + this.calculateWelcomeTextAnimationTime()
      },
      {fn: this.hideRectangles.bind(this), delay: 1500},
      
    )
  }

  showRectangles(){this.displayRectangles=true;}
  hideRectangles(){this.displayRectangles=false;}
  showWelcomeText(){this.displayWelcomeText = true;}
  hideWelcomeText(){this.displayWelcomeText=false;}

}
