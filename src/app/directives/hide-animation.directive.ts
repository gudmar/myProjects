import { Directive, HostListener } from '@angular/core';
import { CommunicationService } from '../services/communication-service.service';

@Directive({
  selector: '[HideAnimation]'
})
export class HideAnimationDirective {

  constructor(private communicator: CommunicationService) { }
  @HostListener('click', ['$event'])
  hideAnimation(){
    this.communicator.inform('hideAnimation','')
  }
}
