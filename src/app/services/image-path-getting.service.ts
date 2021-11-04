import { Injectable } from '@angular/core';

@Injectable()
export class ImagePathGettingService {
  private unspecified: number = -1;
  nestingLevel: number = this.unspecified;
  constructor() { 
    // console.log(this.checkIfPathExists(0))
    // if (this.checkIfPathExists(0)) this.nestingLevel = 0;
  }
  // checkIfPathExists(nestingLevel:number){
  //   let exists:boolean = false;
  //   let concatenatedPath = this.getImagePathInternal('myPhoto.png', nestingLevel);
  //   let imgExists = function(){
  //     exists = true;
  //     debugger
  //   }
  //   let imgNotExist = function() {
  //     exists = false;
  //     debugger
  //   }
  //   let img = new Image();
  //   img.onload = imgExists;
  //   img.onerror = imgNotExist;
  //   img.src = concatenatedPath;
  //   debugger
  //   return exists;
  // }

  // _getImagePath(imageName:string, nestingLevel: number){
  //   if (this.nestingLevel != this.unspecified) return this.getImagePathInternal(imageName, this.nestingLevel)
  //   return this.getImagePathInternal(imageName, nestingLevel);
  // }

  async getImageRootPath(imageName:string, nestingLevel:number){
    let that = this;
    return new Promise((resolve, reject)=>{
      try{
        let img = new Image();
        img.onload = ()=>{
          console.log(that.getImageRootPathInternal(0))
          resolve(that.getImageRootPathInternal(0))
        }
        img.onerror = () =>{
          console.log(that.getImageRootPathInternal(nestingLevel))
          resolve(that.getImageRootPathInternal(nestingLevel))
        }
        img.src = that.getImageRootPathInternal(0) + imageName;
      }
      catch(e){
        console.log(e)
      }
    })
  }

  private getImageRootPathInternal( nestingLevel: number = 0){
    let up = '';
    for(let i = 0; i < nestingLevel; i++){
      up = up+'../'
    }
    return up + 'assets/' 
  }

}
