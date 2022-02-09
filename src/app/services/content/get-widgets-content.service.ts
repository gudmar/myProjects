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
            content:`After clicking a button or waiting-spinner a window with a code snippet pops out, so one may get 
            idea how particular behaviour may be obtained. Gauges are more complicated, so no code snippets for them. 
            However, they can be interacted with.
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
            content: ` Last widget is a lottery wheel. User may click wheel to spin the wheel and draw a winner. 
            Winning wheel part is hidden. A user may add, delete or modify wheel content with a table element. 
            Current wheel content may be saved to a local storage. Load last saved content and clear local storage 
            buttons are available.`  
          },
          {
            type:'image',
            imageName:'WidgetsLotteryWheel.JPG',
            imageAlt: 'Widgets: view at lottery wheel element'
          },
          {
            type: 'p',
            content: `The whole page is responsive, so it looks good on all screens, maybe except for smart watches.`  
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
            content: 'Could be relevant if anyone would like to use this on a website.'
          },
          {
            type: 'p',
            content:`
              Widgets are implemented with a <i>custom web component</i> api.
            `
          },
          {
            type: 'article',
            title: 'Buttons',
            content:[
              {
                type:'p',
                content:`
                  There is a <code>custom-button-1</code> custom web component, that takes below properties:
                `
              },
              {
                type:'unordered-list',
                content:[
                  `<code>data-element-subtype</code> for selecting a button type. For complete list of supported values please visit
                  <a href='https://gudmar.github.io/Widgets/' target='_blank'>project website</a>`,
                  `<code>data-color-theme</code> for selecting a button color theme. Supported values are <q>blue</q>, 
                  <q>green</q>, <q>red</q>`,
                  `<code>data-is-active</code> true/false for activating, deactivating button`,
                  `<code>data-label</code> for setting a button label. If the label is too long and would not fit into button, 
                  it will be cut and dots (...) will be displayed at the end. On hover whole button label will be visible.`,
                  `innerHTML - so text between <code>custom-button-1</code> is available for developers. It will be displayed as
                  button label if <code>data-label</code> attribute is not defined`,
                  `onclick - for defining an action that will be launched after the button is clicked. 
                  This action may be deactivated with <code>data-is-active</code> attribute.`
                ]
              },
              {
                type:'p',
                content:`Button consists of a <code>CustomButton</code> and <code>CustomButtonGeneral</code> classes. Both describe
                common behavior for all buttons. <code>CustomButton</code> class holds the mapping of all button types to classes with specific behaviour 
                implementions. If there is a necessity to decrease size of a button or delete unused button types to reduce size of the widgets library, 
                this is a good place to start.
                There is a set of 38 classes implementing specific button behaviours. Each with a html template and styling. 
                Some contain a bit of JS. To explore original code please clone 
                <a href="https://github.com/gudmar/reusableWidgets" target="_blank">git repository</a>`
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
                  `<code>data-element-subtype</code> for selecting a wheel type. 
                  For complete list of supported values please visit the
                  <a href='https://gudmar.github.io/Widgets/' target='_blank'>project website</a>`,
                  `<code>data-color-theme</code> for selecting a spinner color theme. 
                  Supported values are <q>blue</q>, <q>green</q>, <q>gray</q>, <q>red</q>`,
                  `<code>data-size</code> <q>small</q>, <q>medium</q>, <q>big</q> for changing the wheel size.`,
                ]
              },
              {
                type:'p',
                content:`Waiting-circles consists of a <code>WaitingCircle</code> class a set of type specific classes. 
                <code>WaitinCircle</code>
                class contains common functions for all waiting cirlces, and holds the mapping of all circle types to 
                classes implementing specific behavours. If there is a necessity to decrease the size of waiting-circle 
                implementation and delete unused types, this is a good place to start.
                There is a set of 16 classes implementing specific button behaviours. Each with an html template styling. 
                Some contain a bit of JS. 
                To explore them please clone <a href="https://github.com/gudmar/reusableWidgets" target="_blank">
                git repository</a>`
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
                  coma separated values as its positions. Currently selected element is visible as a <code>data-position</code>
                  attribute. Event <code>stateOnCHenged</code> is emitted when the switch is set to another position.
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
                  This element is called a <code>slide-box</code> and takes a <code>data-label</code> attribute as a string 
                  describing what will be toggled when activated. There is a  <code>data-is-on</code> attribute 
                  that is either <q>true</q> or <q>false</q> and describes the current switch position. <code>stateOnChanged</code>
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
                  There is a <code>degree-gauge</code> custom web element, bound to the <code>DegreeGauge</code> class.
                  This element introduces a basic gauge element scaled in degrees. If there is a necessity to change the element 
                  units, 
                  threshold colors, etc, this should be done with extension of the basic DegreeGauge class in a way it is done for a 
                  <code>PercentageGauge</code>. This class extends <code>DegreeGauge</code> and introduces a 
                  <code>percentage-gauge</code> custom web element just because element needs to be scaled in percentages.
                  Supported attributes for percentage and degree gauges are:
                `
              },
              {
                type:'unordered-list',
                content:[
                  `<code>data-label</code> a string name of the widget,`,
                  `<code>data-approximate</code>: number, integer representing the number of digits that will be displayed,`,
                  `<code>data-value</code> this is the actual value of the component. It will change when component changes, 
                  so the value can be obtained. `,
                ]
              },
              {
                type:'p',
                content:`Thresholds for the specific arc colors are hardcoded in a <code>getConstrants()</code> function, that 
                returns a JS object with <code>minAlertValue</code>, <code>minWarnValue</code>, <code>minValue</code>, 
                <code>maxValue</code>, <code>unit</code> keys.`
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
                  <code>wheel-alike-components-mediator</code> that is added to an html file with a 
                  <code>data-subscribers-ids</code>
                  attribute taking coma separated web element ids. Each subscribed this way element has to have an <code>ul</code>
                  element with nested <code>li</code> elements. When one of the subscribed elements <code>innerHTML</code> 
                  changes rest subscribed elements will 
                  have their <code>innerHTML</code> changed. That is how the wheel interacts with bound chart component. 
                  A semo with more elements is available <a href = "https://gudmar.github.io/LotteryWheel/" target="_blank">
                  here</a>
                `
              },
              {
                type:'p',
                content:`
                  The wheel has a nesetd <code>ul</code> element. That element describes wheels content. 
                  Each <code>li</code>
                  has a <code>data-label</code> attribute that is shown it the circle, and a <code>li</code> inner HTML will be 
                  showed after wheel was spinned. There is an optional <code>hidden</code> class that can be added to 
                  an <code>li</code> element to hide it.
                `
              },
              {
                type:'p',
                content:`
                  Clicking a circle spins it. When spinning ends a modal with result is displayed, and the wheel 
                  <code>innerHTML</code> changes. There is a <code>hidden</code> class added to a related <code>li</code>
                  element. 
                `
              },
              {
                type:'p',
                content:`
                  Element <code>editing-wheel-state-list-responsive</code> has a nested <code>ul</code>, that is the 
                  same as in the case of the <code>spinning-wheel</code> component. 
                  Changes made to this chart will be visible 
                  in the wheel element thanks to the <code>wheel-alike-components-mediator</code>. 
                  Here the circle may be modified.
                `
              },
              {
                type:'p',
                content:`
                  The <i>Save wheel content</i> button saves elements added to wheel to the browsers local storage. 
                  The <i>Load content button</i>
                  gets all saved values from the local storage and puts them to 
                  <code>editing-wheel-state-list-responsive</code>
                  and this element puts them to all subscribed elements. 
                  The <i>Clear content button</i> clears the local storage, so after the page is refreshed default 
                  wheel content will be loaded.
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
