import { Component, OnInit, Input } from '@angular/core';
import { MailToService } from '../../services/mail-to.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss'], //, '../../../styles.scss'
  
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
  constructor(private mailer: MailToService) { }

  ngOnInit(): void {
    let path = this.getImagePath(this.imageName);
    this.switchCurrentImageIndex();
    // debugger
  }
  getImagePath(imageName:string){
    return `../../../../assets/${imageName}`
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
