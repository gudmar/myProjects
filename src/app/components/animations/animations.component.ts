import { Component, OnInit } from '@angular/core';
import { AnimateQueueService } from '../../services/animate-queue.service';

@Component({
  selector: 'animation',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  displayRectangles:boolean=false;
  constructor(private animator: AnimateQueueService) { }

  ngOnInit(): void {
    this.manageAnimation();
  }

  manageAnimation(){
    this.animator.animate(
      {fn: this.showRectangles.bind(this), delay: 1000},
      {fn: this.showRectangles.bind(this), delay: 1000}
    )
  }

  showRectangles(){this.displayRectangles=true;}
  hideRectangles(){this.displayRectangles=false;}

}
