import { Component } from '@angular/core';
import { GetNotepadContentService } from './services/content/get-notepad-content.service';
import { GetMenuContentService } from './services/content/get-menu-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private notePadContentProvider: GetNotepadContentService,
    private menuContentGetter: GetMenuContentService
  ){
  }
  notepadContent = this.notePadContentProvider.getContent();
  title = 'Marek Gudalewicz';
  subtitle = 'Becomming a front end developer'
  // menuContentList = this.menuContentGetter.getContent();
  menuContentList = this.menuContentGetter.getRoutesNavigation();
  portfolioContentList = this.menuContentGetter.getRoutesPortfolio();
  // getMenuContent(){
  //   return this.menuContentGetter.getContent();
  // }
  ngOnInit(){

  }
}
