import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTicTacToeContentService {

  constructor() { }

  getContent(){
    return [
          {
            type: "section",
            title: "About application",
            content: [
              {
                type: 'p',
                content: `
                My dream to construct a game, where a computer would make intelligent moves and play with a winning 
                algorithm finally come true. First idea was to create only a 3x3 game version, but when I started 
                coding I realized, that this instance can be easily made more generic, and it is a lot more rewarding 
                to create a game, where a user may select the board size.`
              },
              {
                type:'image',
                imageName:'TicTacToe2.JPG',
                imageAlt: 'Tic-tac-toe game won'
              },
              {
                type: 'p',
                content: `
                  This is the first thing I wrote in Angular ever.
                `
              }
            ]
          },
          {
            type: "section",
            title: "Features",
            content: [
              {
                type: 'article',
                title: "Select a board",
                content: [
                  {
                    type:'image',
                    imageName:'ticTacToe5.JPG',
                    imageAlt: 'Tic-tac-toe board sellection'
                  },
                  {
                    type:'p',
                    content:'User may select one of games:'
                  },
                  {
                    type:'unordered-list',
                    content:[
                      '3 x 3 - 3 in a row',
                      '7 x 7 - 5 in a row',
                      '10 x 10 - 5 in a row',
                      '12 x 12 - 5 in a row'
                    ]
                  },
                  {
                    type:'p',
                    content:`
                    A used algorithm should manage with more instances of boards and number of figures in a row, 
                    but not every tic-tac-toe game makes sense. If You are interested in detials, everything is 
                    explained in game help section.
                    `
                  },
                  {
                    type:'p',
                    content: `
                    In case of too small screen there are fewer options of board to be chosen from. It would be 
                    annoying to play on 12 x 12 board on tiny screen and scroll all the time.
                    `
                  }
                ]
              },
              {
                type: 'article',
                title: 'Select a opponent',
                content: [
                  {
                    type:'image',
                    imageName:'TicTacToe4.JPG',
                    imageAlt: 'Tic-tac-toe navigation pane.'
                  },
                  {
                    type:'p',
                    content: `
                      Main feature of this game is ability to play against the computer, however after 
                      clicking an <i>Opponent</i> button it may be chosen to play against human on the same machine.
                      `
                  }
                ]
              },
              {
                type: 'article',
                title: 'Select a figure',
                content: [
                  {
                    type:'p',
                    content: `
                        After clicking <i>You are</i> button it is possible to change an opponent. 
                        As circle always starts, when computer is an oponent it is possible to change figure many 
                        times to see computer play against its self.
                      `
                  }
                ]
              }, 
              {
                type: 'article',
                title: 'Information about figure turn',
                content: [
                  {
                    type:'p',
                    content: `
                    This is available under <i>Next</i> icon. This is only an information, so no mouse 
                    interaction is provided.
                      `
                  }
                ]
              },  
              {
                type: 'article',
                title: 'Restart game at any time',
                content: [
                  {
                    type:'p',
                    content: `
                      With the rewind button.
                      `
                  }
                ]
              },   
              {
                type: 'article',
                title: 'Help button',
                content: [
                  {
                    type:'p',
                    content: `
                    After clicking a <i>?</i> button, an information window pops up.
                    One may learn some historical facts about Tic-tac-toe game. There is some information about 
                    used strategies. It is explained why specific board sizes and numbers in a row were chosen. 
                    There is a short description of application features, and a note about me.
                      `
                  }
                ]
              },       
            ]
          },
          {
            type: "section",
            title: 'Tests',
            content: [
              {
                type: 'p',
                content: `
                  Testing can become very time consuming so due to lack of time some tests were not written. 
                  However, I cannot imagine constructing a game like this without automatic regression 
                  strategy tests. That is why all strategies used in this game have a very good level of 
                  test coverage.
                `
              }
            ]
          },
          {
            type: 'section',
            title: 'References',
            content: [
              {
                type: 'link',
                title: 'Github project link.',
                href: 'https://github.com/gudmar/NGTicTacToe',
              },
              {
                type: 'link',
                title: 'Try it out',
                href: 'https://gudmar.github.io/TicTacToe/',
              },
            ]
          },
        ]
      }
  }

