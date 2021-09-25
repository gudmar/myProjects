import { Component, OnInit, Input } from '@angular/core';
import { MailToService } from '../../services/mail-to.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { ImagePathGettingService } from '../../services/image-path-getting.service';

@Component({
  selector: 'head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss'],
  
})
export class HeadSectionComponent implements OnInit {
  @Input() title:string = '';
  @Input() subtitle:string = '';
  @Input() imageNameArray:string[] = [''];
  @Input() menuContent:any[] = [];
  @Input() startPage:string = '';
  currentImageIndex = 0;
  get imageName(){
    return this.imageNameArray[this.currentImageIndex];
  }
  envelope = faEnvelope;
  cv = faUserGraduate;
  envelopeColor = 'white';
  imageRootPath:any = '';
  constructor(
    private mailer: MailToService,
    private imagePathGetter: ImagePathGettingService
  ) { }

  ngOnInit(): void {
    let path = this.getImagePath(this.imageName);
    this.switchCurrentImageIndex();
    this.getImageRootPath('myPhoto.png');
  }
  async getImageRootPath(imageName: string){
    let _imageRootPath = await this.imagePathGetter.getImageRootPath(imageName, 4);
    this.imageRootPath = _imageRootPath;
  }

  get isImageReady(){
    return this.imageRootPath != '';
  }

  getImagePath(imageName:string){
    return this.imageRootPath + imageName;
  }
  openEmailClient(){
    return this.mailer.eMailMe('Hi, ')
  }
  switchCurrentImageIndex(){
    let that = this;
    setInterval(()=>{
      that.currentImageIndex++;
      if(that.currentImageIndex >= that.imageNameArray.length) that.currentImageIndex = 0;
    }, 5000)
  }

  github='github.png'
  // }
}
