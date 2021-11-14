import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AnimateQueueService } from '../../../services/animate-queue.service';

@Component({
  selector: 'welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.scss']
})
export class WelcomeTextComponent implements OnInit {
  @Input() welcomeText: string = 'Hello, welcome to my demo page.';
  @Input() displayNextLetterInterval: number = 100;
  documentWidth: 'small' | 'large' = 'large';
  indexOfLastSymbolToBeDisplayed = 0;
  constructor(private animator: AnimateQueueService) { }


  ngOnInit(): void {
    this.setDocumentWidth();
    this.animate();
  }

  @HostListener('resize',[])
  setDocumentWidth(){this.documentWidth = window.innerWidth > 450 ? 'large' : 'small'}

  welcomeTestAsArray(){
    return Array.from(this.welcomeText);
  }

  animate(){
    this.animator.animate(
      {fn: this.setNextSymbolsForDisplaying.bind(this), delay: 0},
      // {fn: this.hideAllSymbols.bind(this), delay: 4000}
    )
  }

  hideAllSymbols(){
    this.indexOfLastSymbolToBeDisplayed = 0;
  }

  setNextSymbolsForDisplaying(){
    let that = this;
    let interval = setInterval(()=>{
      that.indexOfLastSymbolToBeDisplayed++;
    }, this.displayNextLetterInterval)
    if (this.indexOfLastSymbolToBeDisplayed >= this.welcomeText.length) {
      clearInterval(interval);
      this.hideAllSymbols();
    }
  }

  shouldSymbolBeDisplayed(index: number){
    if (index <= this.indexOfLastSymbolToBeDisplayed) return true;
    return false;
  }

}
