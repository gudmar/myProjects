import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMenuContentService {

  constructor() { }

  getRoutesNavigation(){
    return [
      {path: '/aboutMe', content:'About me'},
      {path: '/cv', content:'CV'},
      {path: '/portfolio', content:'Portfolio'},
    ]
  }
  getRoutesPortfolio(){
    return[
      {path: '/notePad', content:'note Pad'},
      {path: '/ticTacToe', content:'ticTacToe'},
      {path: '/widgets', content:'widgets'},
      {path: '/calculator', content:'calculator'},
      {path: '/cv', content:'cv'},
      {path: '/antyvirusGame', content:'antyvirus game'},
      {path: '/storyDicesGame', content:'storyDicesGame'},
      {path: '/paint', content:'paint'},
      {path: '/deepObjectCopy', content:'deepObjectCopy'},
      {path: '/spinningWheel', content:'spinningWheel'},
    ]
  }

  getContent(){
    return [
      {
        title: "About me",
        content: "aboutMe"
      },
      {
        title: "CV",
        content: "cv"
      },
      {
        title: "Portfolio",
        content: 'portfolio'
      }
      // {
      //   title: "notePad",
      //   contet: "notePad"
      // },
      // {
      //   title: "Tic tac toe",
      //   content: "ticTacToe"
      // },
      // {
      //   title: "Widgets",
      //   content: "widgets"
      // },
      // {
      //   title: "Calculator",
      //   content: "claculator"
      // },
      // {
      //   title: "Antivirus game",
      //   content: "antivirusGame"
      // },
      // {
      //   title: "Story dices",
      //   content: "storyDicesGame"
      // },
      // {
      //   title: "Paint",
      //   content: "paint"
      // },
      // {
      //   title: "Deep object comparator",
      //   content: "deepObjectComparator"
      // },
      // {
      //   title: "Spinning wheel",
      //   content: "spinningWheel"
      // }
    ]
  }
}
