import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'single-rectangle',
  templateUrl: './single-rectangle.component.html',
  styleUrls: ['./single-rectangle.component.scss']
})
export class SingleRectangleComponent implements OnInit {
  private _shouldBlank = false;
  @Input() size: number = 0;
  // @Input() color: string = 'rgb(200, 200, 0)'
  _color: string = '';
  @Input() set color (val:string) {
    this._color  = val;
  }
  get color() {
    console.log(this._color)
    return this._color
  }
  @Input() set shouldBlank(val: boolean){
    this._shouldBlank = val;
    if (val) this.blankThisRectangle();
  }
  blankingDelay_us: number = this.getRandomNumber(1, 5);
  blankingPeriod_us: number = this.getRandomNumber(0, 3);
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    
  }

  getRandomNumber(min: number, max: number){
    if (max < min) throw new Error('getRandomNumber @singleRectangle: min should < max');
    let r = Math.random();
    return min + Math.floor((max - min)*r);
  }

  blankThisRectangle(){
    this.elRef.nativeElement.style.transitionDelay = this.blankingDelay_us;
    this.elRef.nativeElement.style.transitionDuration = this.blankingPeriod_us;
    this.elRef.nativeElement.style.opacity = 0;
    // let delay = setTimeout(()=>{

    // }, this.blankingDelay_us)
  }

}
