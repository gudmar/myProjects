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
              a set of buttons, waiting-spinners, switches, interactable gauges and a lottery circle. Each widget can be interacted with,
              and <abbr title="buttons and waiting-spinners">some of them </abbr> can be customized (color theme and size changed).
            `
          },
          {
            type: 'images-in-a-row',
            imageList:[
              {        
                imageName: 'widgets2.JPG',
                imageAlt: 'Widgets: waiting spinners screenshot'
              },
              {        
                imageName: 'widgets3.JPG',
                imageAlt: 'Widgets: buttons with code snippet screenshot'
              },          
            ]
          },   
          {
            type: 'p',
            content:`After clicking a button or waiting-spinner a window with code snippet pops out, so one may get 
            idea how particular behaviour may be obtained. Gauges are more complicated, so no code snippets for them. 
            However they can be interacted with.
            `
          },
          {
            type: 'images-in-a-row',
            imageList:[
              {        
                imageName: 'WidgetsGauges.JPG',
                imageAlt: 'Widgets: interactable gauges screenshot'
              },
              {        
                imageName: 'WidgetSwitches.JPG',
                imageAlt: 'Widgets: interactable switches screenshot'
              },          
            ]
          },   
          {
            type: 'p',
            content: ` Last widget is a lottery wheel. User may click wheel to spinn the wheel and draw a winner. 
            Winning wheel part is hidde. User may add, delete or modify wheel content with a table element. 
            Current wheel content may be saved to a local storage, load last saved content and clear local storage 
            buttons are available.`  
          },
          {
            type:'image',
            imageName:'WidgetsLotteryWheel.JPG',
            imageAlt: 'Widgets: view at lottery wheel element'
          },
          {
            type: 'p',
            content: `Whole page is responsive, so it looks good on all screens, maybe except for smart watches.`  
          },
          {
            type:'image',
            imageName:'WidgetsResponsive.JPG',
            imageAlt: 'Widgets: Lottery wheel on smaller screen'
          }
      ]
      },
      {
        type:'section',
        title: 'Realization',
        content: [
          {
            type: 'information-note',
            severity: 'info',
            content: 'Could be relevant if anyone whould like to use this on a web site.'
          },
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
                  There is a <code>custom-button-1</code> custom web element, that takes below properties:
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
                content:`Button consists of a <code>CustomButton</code> and <code>CustomButtonGeneral</code> classes. Both describe
                common behavior for all buttons. <code>CustomButton</code> class holds mapping of all button types to classes implementing specific
                behavours. If there is a necessity to decrease size of button implementation and delete unused types, this is a good place to start.
                There is a set of 38 classes implementing specific button behaviours. Each with html template and styling. Some containg a bit of JS. 
                To explore original code please clone <a href="https://github.com/gudmar/reusableWidgets" target="_blank">git repository</a>`
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
                content:`Waiting-circles consists of a <code>WaitingCircle</code> class a set of type specific classes. <code>WaitinCircle</code>
                class contains common functions for all waiting cirlces, and holds mapping of all circle types to classes implementing specific
                behavours. If there is a necessity to decrease size of waiting-circle implementation and delete unused types, this is a good place to start.
                There is a set of 16 classes implementing specific button behaviours. Each with html template styling. Some containg a bit of JS. 
                To explore them please clone <a href="https://github.com/gudmar/reusableWidgets" target="_blank">git repository</a>`
              }
            ]
          },
          {
            type: 'article',
            title: 'Radio switch',
            content:[
              {
                type:'p',
                content:`
                  This element is called a <code>multi-switch</code> and takes <code>data-label-set</code> as 
                  coma separated values as its positions. Currently selected elemet is visible as <code>data-position</code>
                  attribute. Event <code>stateOnCHenged</code> is emmited when switch is set to another position.
                `
              }
            ]            
          },
          {
            type: 'article',
            title: 'Toggle switch',
            content:[
              {
                type:'p',
                content:`
                  This element is called a <code>slide-box</code> and takes <code>data-label</code> attribute as a string 
                  describing what will be toggled when activated. There is a  <code>data-is-on</code> attribute 
                  that is either <q>true</q> or <q>false</q> and describes current switch position. <code>stateOnChanged</code>
                  event is launched when switch is being toggled. This event passes <code>name</code> that is switch name and
                  <code>newStateOn</code>, that is a new switch position.
                `
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
                  There is a <code>degree-gauge</code> custom web element, binded to <code>DegreeGauge</code> class.
                  This element introduces a basic gauge element scaled in degrees. If there is a necessity to change element units, 
                  threshold colors etc, this should be done with extention of basic DegreeGauge class in a way it is done for a 
                  <code>PercentageGauge</code>. This class extends <code>DegreeGauge</code> and introduces a 
                  <code>percentage-gauge</code> custom web element just because element needs to be scaled in percentages.
                  Supported attributes for percentage and degree gauges are:
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
                content:`Thresholds for specific arc colors are hardcoded in a <code>getConstrants()</code> function, that 
                returns a JS object with <code>minAlertValue</code>, <code>minWarnValue</code>, <code>minValue</code>, 
                <code>maxValue</code>, <code>unit</code>.`
              },
              {
                type:'p',
                content:`There is a <code>gauge-changed-event</code> launched when gauge changed its value.`
              },
            ]            
          },
          {
            type: 'article',
            title: 'Lottery wheel - design pattens and a mediator',
            content:[
              {
                type:'p',
                content:`
                  This wheel was created when I was learning <i>design patterns</i>. There is a custom web element 
                  <code>wheel-alike-components-mediator</code> that is added to html file with a <code>data-subscribers-ids</code>
                  attribute taking coma separated web element ids. Each subscribed this way element has to have an <code>ul</code>
                  elemet with <code>li</code> nested. When one of elements <code>innerHTML</code> changes rest elements will 
                  have their <code>innerHTML</code> changed. That is how wheel interacts with binded chart. Demo with more elements
                  is available <a href = "https://gudmar.github.io/LotteryWheel/" target="_blank">here</a>
                `
              },
              {
                type:'p',
                content:`
                  Wheel has a nesetd <code>ul</code> element. That element describes wheels content. Each <code>li</code>
                  has a <code>data-label</code> attribute that is shown on a circle, and <code>li</code> inner HTML will be 
                  showed after wheel was spinned. There is a optional <code>hidden</code> class that can be added to <code>li</code>
                  element to hide it.
                `
              },
              {
                type:'p',
                content:`
                  Clicking a circle spinns it, when spinning is finished a modal with result is displayed, and wheel 
                  <code>innerHTML</code> changes. There is a <code>hidden</code> class added to a related <code>li</code>
                  element. 
                `
              },
              {
                type:'p',
                content:`
                  Element <code>editing-wheel-state-list-responsive</code> has a nested <code>ul</code>, that is the 
                  same as in case of a <code>spinning-wheel</code> component. Changes made to this chart will be visible 
                  in wheel element thanks to <code>wheel-alike-components-mediator</code>. Here new circle may be modified.
                `
              },
              {
                type:'p',
                content:`
                  Save wheel content button saves elements added to wheel to browser local storage. Load content button 
                  gets all saved values from local storage and puts then to <code>editing-wheel-state-list-responsive</code>
                  and this element puts them to all subscribed elements. Clear content button cleares local storage, so 
                  after page is refreshed defoult wheel content will be loaded.
                `
              },
            ]   
          },
            ]
          },
          {
            type: 'section',
            title: 'References',
            content: [
              {
                type: 'link',
                title: 'Github project link.',
                href: 'https://github.com/gudmar/reusableWidgets/',
              },
              {
                type: 'link',
                title: 'Try it out',
                href: 'https://gudmar.github.io/Widgets/',
              },
              {
                type: 'link',
                title: 'See how mediator works with a lot of lottry wheels and related elements',
                href: 'https://gudmar.github.io/LotteryWheel/',
              },
              {
                type: 'link',
                title: 'Mediator working with a lot of lottery wheels desription',
                href: 'https://gudmar.github.io/spinningWheel/',
              },

      ]
      }
      
    ]
  }
}
