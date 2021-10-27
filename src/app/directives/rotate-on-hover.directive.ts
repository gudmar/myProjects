import { Directive, ElementRef, HostListener, Renderer2, Host, Input } from '@angular/core';
// import { ConstantPool } from '@angular/compiler';
// import { ConcatSource } from 'webpack-sources';

// Needs to be applied to element nested in element having perspective parameter set to some value. Good
// tested effect is with 100px;

@Directive({
  selector: '[rotateOnHover]'
})
export class RotateOnHoverDirective {
  elRef: ElementRef;
  constructor(elRef: ElementRef, private renderer: Renderer2) { 
    this.elRef = elRef;
  }
  private _isRotationEnabled: boolean = true;
  @Input() set isRotationEnabled(val:boolean){
    this._isRotationEnabled = val;
    this.onMouseOut(null);
  }
  get isRotationEnabled(){return this._isRotationEnabled}
  @Input() zoomValue: number = 20;
  @Input() perspectiveValue: number = 100;
  @Input() transformatoinOrder:'translateThenRotate'|"rotateThenTranslate" = "rotateThenTranslate";

 @HostListener('mousemove', ['$event'])
 onMouseOver(event:any){
   if (this.isRotationEnabled){
    let attachCorrectSign = function(cords: {x:number, y:number}){
      if(cords.x < 0 && cords.y < 0) return {x: -cords.x, y: cords.y}
      if(cords.x >= 0 && cords.y < 0) return {x: -cords.x, y: cords.y}
      if(cords.x < 0 && cords.y >= 0) return {x: -cords.x, y: cords.y}
      return {x: -cords.x, y: cords.y} //x>=0 y>=0
    }
    let maxAngle = 30;
    let elCords = {
      x: this.elRef.nativeElement.getBoundingClientRect().left + window.scrollX, 
      y: this.elRef.nativeElement.getBoundingClientRect().top + window.scrollY
      };
    // let scaleFactor = this.perspectiveValue/(this.perspectiveValue - this.zoomValue)
    let mousePosition = {x: event.pageX, y: event.pageY}
    let relativePosition = {x:mousePosition.x - elCords.x, y: mousePosition.y - elCords.y};
    let elementSize = {x: this.elRef.nativeElement.offsetWidth , y:this.elRef.nativeElement.offsetHeight};
    // let middlePosition = {x:elementSize.x/2, y:elementSize.y/2};
    let middlePosition = {
      x: parseInt(this.elRef.nativeElement.getBoundingClientRect().width)/2,
      y: parseInt(this.elRef.nativeElement.getBoundingClientRect().height)/2
    }
    let swing = attachCorrectSign({x: relativePosition.x - middlePosition.x, y: relativePosition.y - middlePosition.y});
    let swingPercentage = {x:swing.x/middlePosition.x, y:swing.y/middlePosition.y};
    let angles = {x: swingPercentage.y*maxAngle, y:swingPercentage.x*maxAngle}
    if (angles.x > maxAngle) angles.x = maxAngle;
    if (angles.y > maxAngle) angles.y = maxAngle;
    if (angles.x < -maxAngle) angles.x = -maxAngle;
    if (angles.y < -maxAngle) angles.y = -maxAngle;

    // console.log(elementSize)
    // console.log(swingPercentage)
    // console.log(scaleFactor)
    // console.log(elementSize)
    // console.log(this.elRef.nativeElement.getBoundingClientRect().width)
    // console.log(angles)
    // console.log(elCords)

    // this.renderer.setStyle(this.elRef.nativeElement, 'transform', `translateZ(20px)`);
    // this.renderer.setStyle(this.elRef.nativeElement, 'transform',`rotateX(${angles.x}deg) rotateY(${angles.y}deg)`)

    if (this.transformatoinOrder == 'rotateThenTranslate'){
      this.renderer.setStyle(this.elRef.nativeElement, 
        'transform', 
        ` rotateX(${angles.x}deg) rotateY(${angles.y}deg) translateZ(${this.zoomValue}px)`
      )  
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 
        'transform', 
        `translateZ(${this.zoomValue}px) rotateX(${angles.x}deg) rotateY(${angles.y}deg)`
      )
      // this.renderer.setStyle(this.elRef.nativeElement, 
      //   'transform', 
      //   `translateZ(${this.zoomValue}px)`
      // )
    }
    // this.renderer.setStyle(this.elRef.nativeElement, 'transformation-origin', `center center`)
    // this.renderer.setStyle(this.elRef.nativeElement, 'transform-style', `preserve-3d`)
    // this.renderer.setStyle(this.elRef.nativeElement, 'transform', `translateZ(20px)`)

    // this.renderer.setStyle(this.elRef.nativeElement, 'transformation-origin', `50% 50%`)
    this.renderer.setStyle(this.elRef.nativeElement, 'transformation-origin', `center center`)
  }
 }

 @HostListener('mouseleave', ['$event'])
 onMouseOut(event:any){
  //  if (this.isRotationEnabled){
    // event.stopPropagation();
    this.renderer.setStyle(this.elRef.nativeElement, 'transition', `0.3s`)
    this.renderer.setStyle(this.elRef.nativeElement, 'transform', ``)
  //  }
 }

}
