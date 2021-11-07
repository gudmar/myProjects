import { Injectable } from '@angular/core';
import { GetAboutMeContentService } from './get-about-me-content.service';
import { GetCvContentService } from './get-cv-content.service';
import { GetPortfolioContentService } from './get-portfolio-content.service';
import { GetStoryDicesContentService } from './get-story-dices-content.service';
import { GetTicTacToeContentService } from './get-tic-tac-toe-content.service';
import { GetWidgetsContentService } from './get-widgets-content.service';
import { GetNotepadContentService } from './get-notepad-content.service';
import { GetCalculatorContentService } from './get-calculator-content.service';
import { GetLotteryWheelContentService } from './get-lottery-wheel-content.service';
import { GetObjectComparatorContentService } from './get-object-comparator-content.service';
import { GetPaintContentService } from './get-paint-content.service';
import { GetAntiVirusGameContentService } from './get-anti-virus-game-content.service';
import { GetMixBlendModeContentService } from './get-mix-blend-mode-content.service';

@Injectable({
  providedIn: 'root'
})
export class GetServiceByDistinguishedNameService {

  constructor(
    private aboutMe: GetAboutMeContentService,
    private cv: GetCvContentService,
    private portfolio: GetPortfolioContentService,
    private story: GetStoryDicesContentService,
    private tictactoe: GetTicTacToeContentService,
    private widgets: GetWidgetsContentService,
    private notePad: GetNotepadContentService,
    private calculator: GetCalculatorContentService,
    private spinningWheel: GetLotteryWheelContentService,
    private objectComparator: GetObjectComparatorContentService,
    private paint: GetPaintContentService,
    private antiVirusGame: GetAntiVirusGameContentService,
    private mixBlendMode: GetMixBlendModeContentService
  ) { }

  allDNs = ['About me', 'Portfolio', 'CV', 'Calculator', 
            'Story dices', 'Tic-tac-toe', 'Widgets', 'Note pad', 
            'Spinning Wheel', 'Deep Object Comparator', 'Paint',
            'Anti Virus Game', 'Mix blend mode']

  getServiceContentByDN(serviceName:string){
    if(serviceName == 'About me') return this.aboutMe.getContent();
    if(serviceName == 'CV') return this.cv.getContent();
    if(serviceName == 'Portfolio') return this.portfolio.getContent();
    if(serviceName == 'Story dices') return this.story.getContent();
    if(serviceName == 'Tic-tac-toe') return this.tictactoe.getContent();
    if(serviceName == 'Widgets') return this.widgets.getContent();
    if(serviceName == 'Note pad') return this.notePad.getContent();
    if(serviceName == 'Calculator') return this.calculator.getContent();
    if(serviceName == 'Spinning Wheel') return this.spinningWheel.getContent();
    if(serviceName == 'Deep Object Comparator') return this.objectComparator.getContent();
    if(serviceName == 'Paint') return this.paint.getContent();
    if(serviceName == 'Anti Virus Game') return this.antiVirusGame.getContent();
    if(serviceName == 'Mix blend mode') return this.mixBlendMode.getContent();
    return [];
  }

  getAllContent(){
    let output: any[] = [];
    for (let item of this.allDNs){
      output.push({key:item,content:this.getServiceContentByDN(item)})
    }
    return output;
  }

}

