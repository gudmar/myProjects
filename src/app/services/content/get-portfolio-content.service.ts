import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPortfolioContentService {

  constructor() { }

  getContent(){
    return [
      {
        type: 'row-section',
        title: 'My portfolio',
        content: [
          {
            type: 'portfolio-entry',
            imageName: '_notePad4_calendar.jpg',
            imageNameArray: ['_notePad4_calendar.jpg', '_notePad2.jpg', '_notePad5_calendar_cw.jpg', '_notePad6_calendar_editor.jpg', '_notePad6_calendar_moveTo.jpg', '_notePad3_linker.jpg'],
            title: 'Notes',
            route:'notePad',
            content: `
              Organize your notes in pages and sheets. Save your links and find them thanks to a search box. 
              Manage your tasks with a calendar. Save everything in a local storage or backup file. Everything from 
              this application.
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'ticTacToe3.JPG',
            imageNameArray: 
              ['ticTacToe3.JPG', 'TicTacToe2.JPG','ticTacToe5.JPG', 'TicTacToe4.JPG', 'TicTacToeAbout.JPG'],
            title: 'Tic-tac-toe',
            route: 'ticTacToe',
            content: `
              Play a set of tic-tac-toe game with computer of a friend on the same computer. You may chose to 
              play on bigger boards with more figures in a row, or even see computer playing against its self.
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'widgets2.JPG',
            imageNameArray: ['widgets2.JPG', 'widgets1.JPG', 'widgets3.JPG'],
            title: 'Widgets',
            route:'widgets',
            content: `
              A pure JavaScript page with different widgets like animated buttons, spinning circles, gauges or a 
              spinning wheel. You may peek a code snippet, change color or size. Project is available on 
              github <i class="fab fa-github"></i>. Widgets are encapsulated as custom web components.
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'storyDices1.JPG',
            imageNameArray: ['storyDices1.JPG', 'StoryDices2.JPG', 'storyDices3.JPG'],
            title: 'Story dices',
            route:'storyDices',
            content: `
              Are you a story teller? Draw random symbols and think of a story based on them. You may chose 
              number of dices, and select topics. You may change one dice if the image is not comfortable, 
              of you may redraw all images
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'Calculator1.JPG',
            imageNameArray: ['Calculator1.JPG', 'Calculator2.JPG'],
            title: 'Calculator',
            route: 'calculator',
            content: `
              Infix claculator, evaluating mathematical expression. Capable of calculating any deeply nested 
              expression, supports brackets. Algorithm writtne from scratches. This is <b>not</b> a <code>exec</code>
              function based calculator
            `
          },
        ]
      },
      
    ]
  }
}
