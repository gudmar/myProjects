import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWidgetsContentService {

  constructor() { }

  getContent(){
    return [
      {
        type:'section',
        title: 'About widgets',
        content: [
          {
            type: 'p',
            content:`
              Widgets is a pure JS <abbr title="Single Page Application">SPA</abbr> that presents
              a set of buttons, waiting-spinners, gauges and a lottery circle. Each widget can be interacted with,
              and <abbr title="buttons and waiting-spinners">some of them </abbr> can be customized (color theme and size changed).

            `
          },
          {
            type: 'p',
            content:`After clicking a button or waiting-spinner a window with code snippet pops out, so one may get idea how 
            particular behaviour may be obtained. Gauges are more complicated, but they can be interacted with. There is a lottery wheel,
            that is also interactable. User may click wheel to spinn the wheel and draw a winner. User may add, delete or modify wheel content
            with a table element. User may save current wheel content to local storage, load last saved content and clear local storage.`            
          }
      ]
      },
      {
        type:'section',
        title: 'Implementation',
        content: [
          {
            type: 'p',
            content:`
              Widgets are implemented with a <i>custom web element</i> api.
            `
          },
          {
            type: 'article',
            title: 'Buttons',
            content:[
              {
                type:'p',
                content:`
                  There is a <code>custom-button-1</code> custom web element, taking: <code>data-element-subtype</code> and a 
                  <code>data-color-theme</code> properties for chosing button type and color theme. Label displayed on button can be placed 
                  between <code>custom-button-1</code> tag. 
                `
              },
              {
                type:'unordered-list',
                content:[
                  `<code>data-element-subtype</code> for selecting button type. For complete list of supported values please visit
                  <a href='https://gudmar.github.io/Widgets/' target='_blank'>project webside</a>`,
                  `<code>data-color-theme</code> for selecting button color theme. Supported values are <q>blue</q>, <q>green</q>, <q>red</q>`,
                  `<code>data-is-active</code> true/false for activating, disactivating button`,
                  `<code>data-label</code> for setting button label. If label is too long and would not fitt into button, 
                  it will be cutt and dots (...) will be displayed at the end. On hover whole butto label will be visible`,
                  `innerHTML - so text between <code>custom-button-1</code> is available for developers. It will be displayed as
                  button label if <code>data-label</code> attribute is not defined`,
                  `onclick - for defining action that will be launched after button is clicked. This action may be disactivated with
                  <code>data-is-active</code> attribute.`
                ]
              },
              {
                type:'p',
                content:`Button consists of a <code>CustomButton</code> class and <code>CustomButtonGeneral</code> class. Both describe
                common for all buttons behaviour. <code>CustomButton</code> class holds mapping of all button types to classes implementing specific
                behavours. If there is a necessity to decrease size of button implementation and delete unused types, this is a good place to start.
                There is a set of 38 classes implementing specific button behaviours. Each with html template styling. Some containg a bit of JS. 
                To explore them please clone <a href="https://github.com/gudmar/reusableWidgets" target="_blank">git repository</a>`
              }
            ]
          },
          {
            type: 'article',
            title: 'Waiting-spinners',
            content:[
              {
                type:'p',
                content:`
                  There is a <code>waiting-circle</code> custom web element, taking
                `
              },
              {
                type:'unordered-list',
                content:[
                  `<code>data-element-subtype</code> for selecting wheel type. For complete list of supported values please visit
                  <a href='https://gudmar.github.io/Widgets/' target='_blank'>project webside</a>`,
                  `<code>data-color-theme</code> for selecting button color theme. Supported values are <q>blue</q>, <q>green</q>, <q>gray</q>, <q>red</q>`,
                  `<code>data-size</code> <q>small</q>, <q>medium</q>, <q>big</q> for changing wheel size`,
                ]
              },
              {
                type:'p',
                content:`Waiting-circles consists of a <code>WaitingCircle</code> class a bantch of type specific classes. <code>WaitinCircle</code>
                class contains common functions for all waiting cirlces, and holds mapping of all circle types to classes implementing specific
                behavours. If there is a necessity to decrease size of waiting-circle implementation and delete unused types, this is a good place to start.
                There is a set of 16 classes implementing specific button behaviours. Each with html template styling. Some containg a bit of JS. 
                To explore them please clone <a href="https://github.com/gudmar/reusableWidgets" target="_blank">git repository</a>`
              }
            ]
          },
          {
            type: 'article',
            title: 'Gauges',
            content:[
              {
                type:'p',
                content:`
                  There is a <code>percentage-gaute</code> custom web element extending, ArcGaugeAbstractComponet, and a 
                  <code>degree-gauge</code> that is ArcGaugeAbstractComponent. This is name is missleading because it has
                  <q>abstract</q> in it, and there should be no instance of this class, but I decided not to change it 
                  because this would cost time and not tach me anything new. Sorry, no support for this project anymore.
                  <code>degree-gauge</code> introduces basic behaviour to arc gauge, and it is scaled in degrees. It can be 
                  easly recalculated to percentage (and that is why <code>percentage-gauge</code> was introduced), and any 
                  other values. It is simple, just extention of <code>ArcGaugeAbstractComponent</code> class needs to be added 
                  in a similar way to percentage gauge.</br>
                  Supported attributes are:
                `
              },
              {
                type:'unordered-list',
                content:[
                  `<code>data-label</code> a string name of widget,`,
                  `<code>data-approximate</code>: number, integer representing number of digits after coma that whould be displayed,`,
                  `<code>data-value</code> this is actual value of component. It will change when component changes, so value can be obtained. `,
                ]
              },
              {
                type:'p',
                content:`There is a <code>gauge-changed-event</code> launched when gauge changed its value. Passed variable is new gauge value.`
              },
            ]            
          }
      ]
      }
      
    ]
  }
}
