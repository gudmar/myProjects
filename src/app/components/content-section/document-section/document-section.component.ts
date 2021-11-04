import { Component, OnInit, Input, ElementRef, HostListener, Host } from '@angular/core';
import { ImagePathGettingService } from '../../../services/image-path-getting.service';

@Component({
  selector: 'document-section',
  templateUrl: './document-section.component.html',
  styleUrls: ['./document-section.component.scss']
})
export class DocumentSectionComponent implements OnInit {
  @Input() contentList: any;
  constructor( 
    // private elRef: ElementRef,
    private imagePathGetter: ImagePathGettingService
  ) { }
  imageRootPath:any='';

  ngOnInit(): void {
    // console.dir(this.contentList)
    this.getImageRootPath();
  }

  async getImageRootPath(){
    let that = this;
    return new Promise(async (resolve)=>{
      that.imageRootPath = await this.imagePathGetter.getImageRootPath('myPhoto.png', 4);
      resolve(true);
    })
    
    // console.dir(this.imageRootPath)
  }

  getImagePath(imageName: string){
    console.log(this.imageRootPath)
    console.log(imageName)
    return this.imageRootPath + imageName;
    // return `../../../../../assets/${imageName}`
  }

  async imagePath(imageName:string){
    // that.imageRootPath = await this.imagePathGetter.getImageRootPath('myPhoto.png', 5);
    return await this.imagePathGetter.getImageRootPath(imageName, 4) + imageName;
    // return `../../../assets/${imageName}`
  }
  // @HostListener('mouseover')
  // increaseZ(){
  //   this.elRef.nativeElement.style.zIndex = '10000';
  // }
  increaseZ(data:any){
    data.target.style.zIndex = '10000';
  }
  decreaseZ(data:any){
    data.target.style.zIndex = '0';
  }

  // @HostListener('mouseleave')
  // decreaseZ(){
  //   this.elRef.nativeElement.style.zIndex = '';
  // }
}
