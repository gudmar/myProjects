import { Component, OnInit, Input } from '@angular/core';
import { ImagePathGettingService } from '../../../../services/image-path-getting.service';

@Component({
  selector: 'image-paragraph',
  templateUrl: './image-paragraph.component.html',
  styleUrls: ['./image-paragraph.component.scss']
})
export class ImageParagraphComponent implements OnInit {
  @Input() imageName:string = '';
  @Input() imageAlt: string = '';
  @Input() content: string ='';
  imageRootPath:any = '';
  constructor(
    private imagePathGetter: ImagePathGettingService
  ) { }

  ngOnInit(): void {
    this.getImageRootPath();
  }

  async getImageRootPath(){
    let that = this;
    return new Promise(async (resolve)=>{
      that.imageRootPath = await this.imagePathGetter.getImageRootPath('myPhoto.png', 5);
      console.log(that.imageRootPath)
      resolve(true);
    })
  }

  isImageReady(){
    return this.imageRootPath != '';
  }

  getImagePath(imageName: string){
    return this.imageRootPath + imageName;
  }

}
