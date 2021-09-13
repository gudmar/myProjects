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
    let mousePosition = {x: event.pageX, y: event.pageY}
    let relativePosition = {x:mousePosition.x - elCords.x, y: mousePosition.y - elCords.y};
    let elementSize = {x: this.elRef.nativeElement.offsetWidth, y:this.elRef.nativeElement.offsetHeight};
    let middlePosition = {x:elementSize.x/2, y:elementSize.y/2};
    let swing = attachCorrectSign({x: relativePosition.x - middlePosition.x, y: relativePosition.y - middlePosition.y});
    let swingPercentage = {x:swing.x/middlePosition.x, y:swing.y/middlePosition.y};
    let angles = {x: swingPercentage.y*maxAngle, y:swingPercentage.x*maxAngle}

    this.renderer.setStyle(this.elRef.nativeElement, 'transform', `translateZ(20px) rotateX(${angles.x}deg) rotateY(${angles.y}deg)`)
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
