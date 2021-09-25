import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AnimateQueueService } from '../../../../../services/animate-queue.service';
import { ImagePathGettingService } from '../../../../../services/image-path-getting.service';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  constructor(
    elRef: ElementRef, 
    private animator: AnimateQueueService,
    private imagePathGetter: ImagePathGettingService
  ) { }
  animationDelay = 500;
  @Input() title: string = '';
  @Input() imageArray: string[] = [];
  displayedSlide: 'A' | 'B' | null = 'A';
  beforeSlide: 'A' | 'B' | null = null;
  afterSlide: 'A' | 'B' | null = 'B';
  isAnimationPhase: boolean = false;
  currentImageIndex: number = 0;
  animationInterval: any;
  get nextImageIndex(){
      return this.currentImageIndex + 1 > this.imageArray.length -1 ? 0 : this.currentImageIndex + 1;
    }
  get currentImageName(){ return this.imageArray[this.currentImageIndex]}
  get nextImageName() { return this.imageArray[this.nextImageIndex]}
  imageA = this.getImagePath(this.currentImageName);
  imageB = this.imageArray.length == 0 ? null : this.getImagePath(this.nextImageName)
  imageRootPath: any = '';
  changeImageA() {
    if (this.displayedSlide == 'B') this.imageA = this.getImagePath(this.nextImageName);
    else this.imageA = this.getImagePath(this.currentImageName);
    // debugger
  }
  changeImageB(){
    if (this.displayedSlide == 'A') this.imageB = this.getImagePath(this.nextImageName);
    else this.imageB = this.getImagePath(this.currentImageName);
  }

  loadNewImages(){
    if (this.imageArray.length > 2){
      this.currentImageIndex = this.nextImageIndex;
      if (this.displayedSlide == 'B') this.changeImageA();
      else  this.changeImageB();
    }
  }

  // logAStates:any = [];
  // logBStates:any = [];
  // logStates:any = [];

  ngOnInit(): void {
    // this.getImageRootPath();
    // this.imageA = this.getImagePath(this.currentImageName);
    // this.imageB = this.imageArray.length == 0 ? null : this.getImagePath(this.nextImageName)
    this.initializeImageShow();
    this.animate();
  }
  async initializeImageShow(){
    await this.getImageRootPath();
    this.imageA = this.getImagePath(this.currentImageName);
    this.imageB = this.imageArray.length == 0 ? null : this.getImagePath(this.nextImageName)   
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

  isImageReady(){
    return this.imageRootPath != '';
  }

  async getImageRootPath(){
    let that = this;
    return new Promise(async (resolve)=>{
      that.imageRootPath = await this.imagePathGetter.getImageRootPath('myPhoto.png', 5);
      resolve(true);
    })
    
    // console.dir(this.imageRootPath)
  }

  getImagePath(imageName: string){
    return this.imageRootPath + imageName;
    // return `../../../../../assets/${imageName}`
  }
  animateOn(){
    // this.logAStates.push('animate ON')
    // this.logBStates.push('animate ON')
    // this.logStates.push('animate ON')
    this.isAnimationPhase = true;
  }
  animateOff(){
    // this.logBStates.push('animate OFF')
    // this.logAStates.push('animate OFF')
    // this.logStates.push('animate OFF')
    this.isAnimationPhase = false;
  }
  switchToA(){
    // debugger
    this.beforeSlide = 'B';
    // this.logAStates.push('switchTo A before to B')
    // this.logBStates.push('switchTo A beforeTo B')
    // this.logStates.push('switchTo A beforeTo B')
    this.afterSlide = null;
    this.displayedSlide = 'A';
    // console.log('A')
  }
  switchToB(){
    // debugger
    this.beforeSlide = 'A';
    // this.logAStates.push('switch to B, beforeTo A ')
    // this.logBStates.push('switchTo B before to A')
    // this.logStates.push('switchTo B before to A')
    this.afterSlide = null;
    this.displayedSlide = 'B';
    // console.log('B')
  }
  // setSlidetoAfter(whatSlide: 'A'|'B'|null){
  //   let slide = whatSlide;
  //   // console.log('set slide to after')
  //   this.logAStates.push(`set ${whatSlide} to after`)
  //   this.logBStates.push(`set ${whatSlide} to after`)
  //   this.logStates.push(`set ${whatSlide} to after`)
  //   return () => {
  //     this.beforeSlide = null;
  //     this.afterSlide = slide;  
  //   }
  // }
  setSlideAToAfter(){
    // this.logAStates.push(`set A to after`)
    // this.logBStates.push(`set A to after`)
    // this.logStates.push(`set A to after`)    
    this.beforeSlide = null;
    this.afterSlide = 'A'    
  }
  setSlideBToAfter(){
    // this.logAStates.push(`set B to after`)
    // this.logBStates.push(`set B to after`)
    // this.logStates.push(`set B to after`)    
    this.beforeSlide = null;
    this.afterSlide = 'B'    
  }

  animateSwitchToA(){
    this.animator.animate(
      {fn: this.animateOn.bind(this), delay: this.animationDelay},
      {fn: this.switchToA.bind(this), delay: this.animationDelay},
      {fn: this.animateOff.bind(this), delay: this.animationDelay},
      {fn: this.setSlideBToAfter.bind(this), delay: this.animationDelay},
      {fn: this.loadNewImages.bind(this), delay: this.animationDelay}
    )
  }
  animateSwitchToB(){
    this.animator.animate(
      {fn: this.animateOn.bind(this), delay: this.animationDelay},
      {fn: this.switchToB.bind(this), delay: this.animationDelay},
      {fn: this.animateOff.bind(this), delay: this.animationDelay},
      {fn: this.setSlideAToAfter.bind(this), delay: this.animationDelay},
      {fn: this.loadNewImages.bind(this), delay: this.animationDelay}
    )
  }

  getDisplayedSlide(){
    return this.displayedSlide
  }
  

  animate(){
    if (this.imageArray.length > 0){
      let that = this;
      this.animationInterval = setInterval(
        ()=>{
          if (this.getDisplayedSlide() == 'A') this.animateSwitchToB();
          else this.animateSwitchToA();
          // console.dir({
          //   A: this.logAStates,
          //   B: this.logBStates,
          //   BOth: this.logStates
          // })
        }, 4*this.animationDelay
      )  
    }
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

