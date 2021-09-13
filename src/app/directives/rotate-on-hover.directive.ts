import { Directive, ElementRef, HostListener, Renderer2, Host } from '@angular/core';
import { ConstantPool } from '@angular/compiler';
import { ConcatSource } from 'webpack-sources';

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

 @HostListener('mousemove', ['$event'])
 onMouseOver(event:any){
   let attachCorrectSign = function(cords: {x:number, y:number}){
    if(cords.x < 0 && cords.y < 0) return {x: -cords.x, y: cords.y}
    if(cords.x >= 0 && cords.y < 0) return {x: -cords.x, y: cords.y}
    if(cords.x < 0 && cords.y >= 0) return {x: -cords.x, y: cords.y}
    return {x: -cords.x, y: cords.y} //x>=0 y>=0
   }
   let maxAngle = 40;
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
  //  console.log(this.targetElement)
  //  debugger
  //  console.log(swingPercentage)
  // console.log(middlePosition)
  // console.log(elementSize)
  // console.log(swing)
  // console.log(relativePosition)
  // console.log(elCords)

   this.renderer.setStyle(this.elRef.nativeElement, 'transform', `rotateX(${angles.x}deg) rotateY(${angles.y}deg)`)
 }

 @HostListener('mouseleave', ['$event'])
 onMouseOut(event:any){
   event.stopPropagation();
  console.log(this.elRef.nativeElement)  // right
  console.log(event.target) // right after deleting span
  //  console.error(`Here is the problem. If this hostlistener is commeted, element can be found. 
  //  Like mouse out causes element not to be found... Event target poited to span ..`)
   let a = this.elRef.nativeElement;
  //  debugger

  this.renderer.setStyle(a, 'transition', `0.3s`)
  
  this.renderer.setStyle(a, 'transform', ``)
  
 }

}
