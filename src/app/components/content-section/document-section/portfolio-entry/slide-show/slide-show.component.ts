import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AnimateQueueService } from '../../../../../services/animate-queue.service';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  constructor(elRef: ElementRef, private animator: AnimateQueueService) { }
  @Input() title: string = '';
  @Input() imageArray: string[] = [];
  displayedSlide: 'A' | 'B' | null = 'A';
  beforeSlide: 'A' | 'B' | null = 'A';
  afterSlide: 'A' | 'B' | null = 'A';
  isAnimationPhase: boolean = false;
  currentImageIndex: number = 0;
  animationInterval: any;
  get nextImageIndex(){
      return this.currentImageIndex + 1 > this.imageArray.length -1 ? 0 : this.currentImageIndex + 1;
    }
  get currentImageName(){ return this.imageArray[this.currentImageIndex]}
  get nextImageName() { return this.imageArray[this.nextImageIndex]}
  get imageB() {
    if (this.displayedSlide == 'A') return this.getImagePath(this.nextImageName);
    return this.getImagePath(this.currentImageName);
  }
  get imageA() {
    if (this.displayedSlide == 'B') return this.getImagePath(this.nextImageName);
    return this.getImagePath(this.currentImageName);
  }

  ngOnInit(): void {
    this.animate();
  }
  isDisplayed(whatSlide: 'A' | 'B' | null){
    return this.displayedSlide == whatSlide;
  }
  isBefore(whatSlide: 'A' | 'B' | null){
    return this.beforeSlide == whatSlide;
  }
  isAfter(whatSlide: 'A' | 'B' | null){
    return this.afterSlide == whatSlide;
  }
  isAnimated(whatSlide: 'A' | 'B' | null){
    return this.isAnimationPhase;
  }
  getImagePath(imageName: string){
    return `../../../../../assets/${imageName}`
  }
  animateOn(){this.isAnimationPhase = true;}
  animateOff(){this.isAnimationPhase = false;}
  switchToA(){
    this.beforeSlide = 'B';
    this.displayedSlide = 'A';
    // debugger;
    console.log('A')
  }
  switchToB(){
    this.beforeSlide = 'A';
    this.displayedSlide = 'B';
    // debugger
    console.log('B')
  }
  setSlidetoAfter(whatSlide: 'A'|'B'|null){
    let slide = whatSlide;
    return () => {
      this.beforeSlide = null;
      this.afterSlide = slide;  
    }
  }
  animateSwitchToA(){
    this.animator.animate(
      {fn: this.animateOn.bind(this), delay: 0},
      {fn: this.switchToA.bind(this), delay: 300},
      {fn: this.animateOff.bind(this), delay: 0},
      {fn: this.setSlidetoAfter('B').bind(this), delay: 0}
    )
    console.log('switchToA')
  }
  animateSwitchToB(){
    this.animator.animate(
      {fn: this.animateOn.bind(this), delay: 0},
      {fn: this.switchToB.bind(this), delay: 300},
      {fn: this.animateOff.bind(this), delay: 0},
      {fn: this.setSlidetoAfter('A').bind(this), delay: 0}
    )
    console.log('switchToB')
  }

  getDisplayedSlide(){
    console.log(`In getDisplayedSlide returning ${this.displayedSlide}`)
    return this.displayedSlide
  }
  

  animate(){
    let that = this;
    this.animationInterval = setInterval(
      ()=>{
        // debugger
        if (this.getDisplayedSlide() == 'A') this.animateSwitchToB();
        else this.animateSwitchToA();
      }, 3000
    )
  }

  ngOnDestroy(){
    if (this.animationInterval != null) clearInterval(this.animationInterval)
  }


}

// <div class="screen">
//     <div class="slide perspective" 
//         [ngClass]="{'displayed': isDisplayed('A'), isBefore('A'), isAfter('A'), isAnimated('A')}">
//         <img  rotateOnHover [transformatoinOrder]="'translateThenRotate'" [zoomValue] = '100' 
//             [src]="imageA" alt="image A">
//     </div>
//     <div class="slide perspective" 
//         [ngClass]="{'displayed': isDisplayed('B'), isBefore('B'), isAfter('B'), isAnimated('B')}">
//         <img  rotateOnHover [transformatoinOrder]="'translateThenRotate'" [zoomValue] = '100' 
//             [src]="imageB" alt="image B">
//     </div>
// </div>