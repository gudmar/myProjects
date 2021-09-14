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
        title: 'Tic-tac-toe',
        content: [
          {
            type: "article",
            title: "About application",
            content: [
              {
                type: 'p',
                content: `
                My dream to construct a game, where computer would make intelligent moves and play w winning 
                algorithm finally come true. First idea was to create only 3x3 game version, but when I started 
                coding I realised that this instance can be easly made more generic, and it is a lot more rewarding 
                to create a game, where user may select board size.`
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
            type: "article",
            title: "Features",
            content: [
              {
                type: 'article',
                title: "Select a board",
                content: [
                  {
                    type:'p',
                    content:'User may select one of games'
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
                    Used algorithm should manage with more instances of boards and number of figures in a row, but not every 
                    tic-tac-toe game makes sense. 
                    If You are interested in detiales, everything is explained in game help section
                    `
                  },
                  {
                    type:'p',
                    content: `
                    In case of too small screan there are less options of board to be chosen from. It would be anoying 
                    to play on 12 x 12 board on tiny screen and scroll all the time.
                    `
                  }
                ]
              },
              {
                type: 'article',
                title: 'Select a opponent',
                content: [
                  {
                    type:'p',
                    content: `
                      Main feature of this game is ability to play against computer, however after 
                      clicking a <i>Oponint</i> button it may be chosen to play against human on the same computer.
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
                        After clicking <i>You are</i> button it is possible to change a opponent. 
                        As circle always winns, when computer is a oponent it is possible to change figure many 
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
                      With rewind button
                      `
                  }
                ]
              },   
              ,  
              {
                type: 'article',
                title: 'Help button',
                content: [
                  {
                    type:'p',
                    content: `
                    Marked as <i>?</i>. After clicking a window with information pops up. 
                    One may learn some historical facts about Tic-tac-toe game, there is information about 
                    used strategies, it is explained why certaing board sizes and numbers in a row were chosen. 
                    There is a short description of application features, and a short note about me.
                      `
                  }
                ]
              },       
            ]
          }
        ]
      },
      {
        type: "article",
        title: 'Tests',
        content: [
          {
            type: 'p',
            content: `
              Testing can become very time consuming so due to a lot of activities not everything could have been tested. However I cannot image constructing a game like this without automatic regression strategy tests.
              That is why all strategies used in this game have a very good level of test coverage.
            `
          }
        ]
      }
    ]
  }
}
