import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailToService {
  details: any = {
    destinationAddress: 'gudalewicz.marek@gmail.com',
    subject: 'Lets talk'
  }
  constructor() { 

  }
  eMailMe(message:string){
    return `mailto:${this.details.destinationAddress}?subject=${this.details.subject}&body=${message}`
  }


}
