import { Component, OnInit, Input } from '@angular/core';
import { ImagePathGettingService } from '../../../../services/image-path-getting.service';

@Component({
  selector: 'image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss']
})
export class ImageComponentComponent implements OnInit {
  @Input() imageName: string = '';
  @Input() imageAlt: string = '';
  @Input() maxHeight: string = '';
  constructor(
    private imagePathGetter: ImagePathGettingService
  ) { }

  ngOnInit(): void {
    this.getImageRootPath();
  }
  imageRootPath:any = '';

  async getImageRootPath(){
    let that = this;
    return new Promise(async (resolve)=>{
      that.imageRootPath = await this.imagePathGetter.getImageRootPath('myPhoto.png', 5);
      resolve(true);
    })
  }

  isImageReady(){
    return this.imageRootPath != '';
  }

  getImagePath(imageName: string){
    return this.imageRootPath + imageName;
    // return `../../../../../assets/${imageName}`
  }

}
