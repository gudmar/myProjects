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
            imageNameArray: ['notePad4_calendar.JPG', 'notePad21.JPG', 'notePad5CalendarCw.JPG', 'notePad6CalendarEditor.JPG', 'notePad6CalendarMoveTo.JPG', 'notePad3Linker.JPG'],
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
              Infix claculator, evaluating math expression. Capable of calculating any deeply nested 
              expression, supports brackets. Algorithm writtne from scratches. This is <b>not</b> a <code>exec</code>
              function based calculator
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'LotteryWheel2.jpg',
            imageNameArray: ['LotteryWheel2.jpg', 'LotteryWheel3.png', 'LotteryWheel5.jpg'],
            title: 'Mediator - lottery wheel',
            route: 'spinningWheel',
            content: `
              How to bind a lottery wheel that animates drawing a random winner with an editor or other multiple 
              elements in pure JS using a HTML tag?
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'ObjectComparator_code.png',
            imageNameArray: ['ObjectComparator_code.png', 'ObjectComparator_tests.jpg'],
            title: 'Deep object comparator',
            route: 'deepObjectComparator',
            content: `
              No visualisation here. This is a well tested class letting deeply nested comparasion of 2 JS objects.
              Supports strings, primitives, arrays, objects, maps and sets. Arrays items order may be or may be not taken 
              into account
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'Paint.JPG',
            imageNameArray: ['Paint.JPG', 'Paint2.jpg'],
            title: 'Paint',
            route: 'paint',
            content: `
              Very simple paint script. Written from scratch in 5 hours. Makes an SVG. Save button allows to print ready 
              SVG to browser console
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'antiVirus_2.png',
            imageNameArray: ['antiVirus_2.png', 'antiVirus_4.png', 'antiVirus_3.png', 'antiVirus_1.png'],
            title: 'Virus hounting game',
            route: 'antyvirusGame',
            content: `
              Inspired by one of GTA V plots. You have to shut all popping windows and launch anti-virus before your disc gets 
              encripted. Game contains links to SVG elemets that were not created by me.
            `
          },
          {
            type: 'portfolio-entry',
            imageName: 'mixBlendMode1.png',
            imageNameArray: ['mixBlendMode2.png', 'mixBlendMode3.png'],
            title: 'Blend mode presentation',
            route: 'blendMode',
            content: `
              My very early mix-blend-mode test page. There is a drag-minimize color chooser for all mix-blend-mode samples. 
              A responsive page.
            `
          },
        ]
      },
      
    ]
  }
}
