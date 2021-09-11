import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMenuContentService {

  constructor() { }

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
        title: "notePad",
        contet: "notePad"
      },
      {
        title: "Tic tac toe",
        content: "ticTacToe"
      },
      {
        title: "Widgets",
        content: "widgets"
      },
      {
        title: "Calculator",
        content: "claculator"
      },
      {
        title: "Antivirus game",
        content: "antivirusGame"
      },
      {
        title: "Story dices",
        content: "storyDicesGame"
      },
      {
        title: "Paint",
        content: "paint"
      },
      {
        title: "Deep object comparator",
        content: "deepObjectComparator"
      },
      {
        title: "Spinning wheel",
        content: "spinningWheel"
      }
    ]
  }
}
