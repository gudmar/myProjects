import { Component, OnInit, Input } from '@angular/core';
import { MailToService } from '../../services/mail-to.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss'], //, '../../../styles.scss'
  
})
export class HeadSectionComponent implements OnInit {
  @Input() title:string = '';
  @Input() subtitle:string = '';
  @Input() imageName:string = '';
  @Input() menuContent:any[] = [];
  @Input() startPage:string = '';
  envelope = faEnvelope;
  constructor(private mailer: MailToService) { }

  ngOnInit(): void {
    let path = this.getImagePath(this.imageName)
    // debugger
  }
  getImagePath(imageName:string){
    return `../../../../assets/${imageName}`
  }
  openEmailClient(){
    return this.mailer.eMailMe('Hi, ')
  }
}
