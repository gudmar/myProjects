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
          }
      ]

      }
      
    ]
  }
}
