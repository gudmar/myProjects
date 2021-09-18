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
    return this._color
  }
  @Input() set shouldBlank(val: boolean){
    this._shouldBlank = val;
    if (val) this.blankThisRectangle();
  }
  private _showHide: 'show'|'hide' = 'hide';
  @Input() set showHide(val:'show'|'hide'){
    // this._showHide = val;
    if (val == "show") this.showThisRectangle();
    if (val == "hide") this.blankThisRectangle();
  };

  delay:number = this.getRandomNumber(1000, 5000);
  get showHide(){
    return this._showHide;
  }
  blankingDelay_us: number = this.getRandomNumber(1, 5);
  blankingPeriod_us: number = this.getRandomNumber(0, 3);
  blankingFunction: boolean[] = [false, false, false, false];
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    let chosenBlandingFunction = this.getRandomNumber(0, 4);
    this.blankingFunction[chosenBlandingFunction] = true;
    
  }

  getRandomNumber(min: number, max: number){
    if (max < min) throw new Error('getRandomNumber @singleRectangle: min should < max');
    let r = Math.random();
    return min + Math.floor((max - min)*r);
  }

  showThisRectangle(){
    let t = setTimeout(()=>{this._showHide = 'show'}, this.delay)
  }
  blankThisRectangle(){
    let t = setTimeout(()=>{this._showHide = 'hide'}, this.delay)
  }

  // blankThisRectangle(){
  //   let chosenBlandingFunction = this.getRandomNumber(0, 4);
  //   let that = this;
  //   let t = setTimeout(()=>{
  //     that.blankingFunction[chosenBlandingFunction] = true;
  //     clearTimeout(t);
  //   }, this.getRandomNumber(1000, 5000))
  // }

}
