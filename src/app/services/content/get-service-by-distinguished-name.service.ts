import { Injectable } from '@angular/core';
import { GetAboutMeContentService } from './get-about-me-content.service';
import { GetCvContentService } from './get-cv-content.service';
import { GetPortfolioContentService } from './get-portfolio-content.service';

@Injectable({
  providedIn: 'root'
})
export class GetServiceByDistinguishedNameService {

  constructor(
    private aboutMe: GetAboutMeContentService,
    private cv: GetCvContentService,
    private portfolio: GetPortfolioContentService
  ) { }

  getServiceContentByDN(serviceName:string){
    if(serviceName = 'About me') return this.aboutMe.getContent();
    if(serviceName = 'CV') return this.cv.getContent();
    if(serviceName = 'Portfolio') return this.portfolio.getContent();
    return [];
  }

}
