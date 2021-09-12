import { Directive, ElementRef, HostListener, Renderer2, Host } from '@angular/core';
import { ConstantPool } from '@angular/compiler';
import { ConcatSource } from 'webpack-sources';

@Directive({
  selector: '[applyParalaxBg]'
})
export class ApplyParalaxBgDirective {
  elRef: ElementRef;
  constructor(elRef: ElementRef, private renderer: Renderer2) { 
    this.elRef = elRef;
    
  }

}
