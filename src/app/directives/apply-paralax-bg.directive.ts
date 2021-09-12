import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[applyParalaxBg]'
})
export class ApplyParalaxBgDirective {
  elRef: ElementRef;
  constructor(elRef: ElementRef, private renderer: Renderer2) { 
    this.elRef = elRef;
  }

 @HostListener('mousemove', ['$event'])
 onMouseOver(event:any){
   let maxAngle = 30;
   let elCords = {x: this.elRef.nativeElement.offsetLeft, y: this.elRef.nativeElement.offsetTop};
   let mousePosition = {x: event.pageX, y: event.pageY}
   let relativePosition = {x:mousePosition.x - elCords.x, y: mousePosition.y - elCords.y};
   let elementSize = {x: this.elRef.nativeElement.offsetWidth, y:this.elRef.nativeElement.offsetHeight};
   let middlePosition = {x:elementSize.x/2, y:elementSize.y/2};
   let swing = {x: relativePosition.x - middlePosition.x, y: relativePosition.y - middlePosition.y};
   let swingPercentage = {x:swing.x/middlePosition.x, y:swing.y/middlePosition.y};
   let angles = {x: swingPercentage.x*maxAngle, y:-swingPercentage.y*maxAngle}
   console.log(swingPercentage)
   this.renderer.setStyle(this.elRef.nativeElement, 'transform', `rotateX(${angles.x}deg) rotateY(${angles.y}deg)`)
 }

}
