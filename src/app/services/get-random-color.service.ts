import { Injectable } from '@angular/core';

@Injectable()
export class GetRandomColorService {
  colorList = this.getColorArray();
  private getColorArray(){
    let listOfColors:any[] = [
      'hsl(0  , 100%, 50%)',
      'hsl(60 , 100%, 50%)',
      'hsl(50 , 100%, 50%)',
      'hsl(120, 100%, 50%)',
      'hsl(170, 100%, 50%)',
      'hsl(240, 100%, 50%)',
      'hsl(270, 100%, 50%)',
      'hsl(300, 100%, 50%)',
      'hsl(165, 100%, 50%)',
      'hsl(0  , 0%, 50%)',
      'hsl(0  , 0%, 0%)',
      'hsl(0  , 0%, 100%)',
    ]
    return listOfColors;
  }
  constructor() { }
  private getRandomElementIndex(){
    let max = this.colorList.length-1;
    if (max == 0) return 0;
    let r = Math.random();
    return Math.floor(r * max);
  }

  private takeOutColorListElementAtIndex(index:number){
    let output = this.colorList[index];
    this.colorList.splice(index, 1);
    return output;
  }

  getNextRandomColor(){
    let randomIndex = this.getRandomElementIndex();
    return this.takeOutColorListElementAtIndex(randomIndex);
  }

  getRandomColorArray(nrOfColors:number){
    let output: string[] = [];
    for (let i = 0; i < nrOfColors; i++){
      if (this.colorList.length == 0) this.colorList = this.getColorArray();
      output.push(this.getNextRandomColor());
    }
    return output;
  }

}
