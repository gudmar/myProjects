import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLotteryWheelContentService {

  constructor() { }
  getContent(){
    return[
      {
        type: "section",
        title: "About",
        content: [
          {
            type: 'p',
            content: `
              I saw a lottery wheel on one of online Toastmasters table topic contests. I immediately decided to create a 
              similar wheel. It was my first typeScript exercise, and at that time I was before clean code training, so code
              soon got a bit messy. I created 3 components: a lottery wheel, an editor and a widget, where I could hide or reveal
              particular parts of the wheel without showing their hidden content to the public. At that time I discovered that 
              binding 3 not encapsulated elements in one web page may be not an easy task...
            `
          },
          {
            type: 'p',
            content: `
              A while later, after a <a href="https://www.youtube.com/watch?v=7EmboKQH8lM">clean code training</a>, after
              learing about <a href="https://developers.google.com/web/fundamentals/web-components/customelements">
              custom web components</a> and after getting familiar with some of 
              <a href="https://dev.to/shijiezhou/top-10-javascript-patterns-every-developers-like-168p"> design patterns</a>
              I decided to convert my old lottery wheel into a component, that could be easly used in my later projects. 
              Git repository linked at the bottom of this article is my final result. Demo page demonstrates a set of 20
              lottery wheels, a set of 20 wheel editors (nested in modals), everyting is binded together in a way, that 
              editing one of elements changes all 40 elements at the same time. This is pure <strong>Java Script</strong>
            `
          },
          {
            type:'image',
            imageName:'LotteryWheel2.jpg',
            imageAlt: '20 lottery wheels binded together'
          },
        ]
      },
      {
        type: "section",
        title: "How this is done?",
        content: [
          {
            type: 'article',
            title: 'Mediator pattern',
            content: [
              {
                type: 'p',
                content: `
                  A mediator is a component, that passes information between other components. Each component 
                  that wants to receive information from a mediator has to subscribe to it, and inform what sort of 
                  information it is interested in. Element, that changes its state informs mediator about this, and
                  mediator passes this piece of information to all interested components. Then each informed item may
                  react to passed information in a desired way.
                `
              },
            ]
          },
          {
            type: 'article',
            title: 'Mediator as HTML element',
            content: [
              {
                type: 'p',
                content: `
                  How to put a mediator into a web page? A mediator needs to be a sort of a singleton. I mean 
                  there may be a few instances of a mediator, however there will be no information flow between components
                  subscribed to different mediator instances. That is why a mediator could be an object, that would be 
                  created before each component subscribes, and then each created element would receive instance of mediator
                  and subscribe. However this solution in pure JS seems a bit complicated, and it would be difficult to 
                  come back to such code after a while to reuse it in other project. That is why I created a custom web element
                  named <code>wheel-alike-components-mediator</code>, that takes as a attribute <code>data-subscirbers-ids</code>
                  with comma separated unique ids of subscribed elements. 
                  If a subscribed element is changed it emits an event. If mediators innerHTML describes a different 
                  state than changed element, mediator changes its own innerHTML, and adjust each subscribed elements 
                  innerHTML, so all interested elements have aligned HTML content.
                `
              },
              {
                type: 'p',
                content: `
                  Described behavoiur is slightly different than classical mediators behaviour, as classical mediators
                  do not modify subscribed elements, but I wanted 
                  wheel related elements to be edited by changing their inner HTML. This approach makes it
                  very simple for future reuse of this component, and this is quite readable.
                `
              },
              {
                type:'image',
                imageName:'LotteryWheel3.png',
                imageAlt: 'Lottery wheel editor'
              },
            ]
          },
          {
            type:'image',
            imageName:'',
            imageAlt: ''
          },
    ]
     },
     {
      type: "section",
      title: "Some features",
      content: [
        {
          type:'image',
          imageName:'LotteryWheelMenu.png',
          imageAlt: 'Lottery wheel option buttons'
        },
        {
          type: 'article',
          title: 'Turning mediator off',
          content: [
            {
              type: 'p',
              content: `
                User may disactivate mediator by clicking a <q>Del master mediator</q> button in upper section.
                Now changing a single wheel state does not affect rest of elements on page. 
                After mediator is turned on again it will allign all elements to its internal state (its innerHTML)
              `
            },
          ]
        },
        {
          type: 'article',
          title: 'Set random',
          content: [
            {
              type: 'p',
              content: `
                This button will <b>set a random number of elements to mediators innerHTML</b>. So this feature 
                needs mediator to be turned on. If mediator is activated, all wheels and editors will be filled with 
                a random number of elements. If mediator is disactivated, this button has no effect. 
              `
            },
            {
              type: 'information-note',
              severity: 'warn',
              content: `In case mediator is removed and Set random is clicked, no information will be presented to a 
              user, as this page is only an exercise.`
            },
          ]
        },
        {
          type: 'article',
          title: 'Statistics',
          content: [
            {
              type: 'p',
              content: `
                This button opens a dialog box, that allows user to spin an invisable wheel instance many times and 
                test number of times each wheel part is selected. This was created to see if spinnings give equaly 
                distirbuted results. 
              `
            },
            {
              type:'image',
              imageName:'LotteryWheel5.jpg',
              imageAlt: 'Lottery statistical test window'
            },
          ]
        },
        {
          type: 'article',
          title: 'Present colors',
          content: [
            {
              type: 'p',
              content: `
                This button is made to visualise wheel color generator results.
              `
            },
          ]
        },
        {
          type: 'article',
          title: 'Clear console',
          content: [
            {
              type: 'p',
              content: `
                As this is only an exercise, it is full of console prints. When page was tested this button was quite usefull.
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
          href: 'https://github.com/gudmar/spinningWheel',
        },
        {
          type: 'link',
          title: 'Try it out',
          href: 'https://gudmar.github.io/LotteryWheel/',
        },
        {
          type: 'link',
          title: 'Clean code reference I would recommend',
          href: 'http://www.butunclebob.com/',
        },
        {
          type: 'link',
          title: 'Something about design patterns',
          href: 'https://dev.to/shijiezhou/top-10-javascript-patterns-every-developers-like-168p',
        },
        {
          type: 'link',
          title: 'Custom web elemets',
          href: 'https://developers.google.com/web/fundamentals/web-components/customelements',
        },
        
]
}
    ]
  }
}
