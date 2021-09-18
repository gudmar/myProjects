import { Component, OnInit } from '@angular/core';
import { AnimateQueueService } from '../../services/animate-queue.service';

@Component({
  selector: 'animation',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  displayRectangles:boolean=false;
  displayWelcomeText:boolean = false;
  welcomeMessage: string = "Hello, welcome to my demo page."
  displayNextInterval: number = 100;
  constructor(private animator: AnimateQueueService) { }

  ngOnInit(): void {
    this.manageAnimation();
  }

  calculateWelcomeTextAnimationTime(){
    return this.welcomeMessage.length * this.displayNextInterval;
  }
  calcualteDiaplayTimeOfAllRectangles(){
    return 5000
  }

  manageAnimation(){
    this.animator.animate(
      {fn: this.showWelcomeText.bind(this), delay: 0},
      {fn: this.showRectangles.bind(this), delay: 4000},
      {fn: this.hideWelcomeText.bind(this), delay: this.calcualteDiaplayTimeOfAllRectangles() + this.calculateWelcomeTextAnimationTime()},
      {fn: this.hideRectangles.bind(this), delay: 6000},
      
    )
  }

  showRectangles(){this.displayRectangles=true;}
  hideRectangles(){this.displayRectangles=false;}
  showWelcomeText(){this.displayWelcomeText = true;}
  hideWelcomeText(){this.displayWelcomeText=false;}

}
