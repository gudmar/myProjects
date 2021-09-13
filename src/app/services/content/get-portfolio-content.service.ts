import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPortfolioContentService {

  constructor() { }

  getContent(){
    return [
      {
        type: 'section',
        title: 'My portfolio',
        content: [
          {
            type: 'portfolio-entry',
            imageName: 'Calculator1.JPG',
            title: 'Calculator',
            content: `
              Infix claculator, evaluating mathematical expression. Capable of calculating any deeply nested 
              expression, supports brackets. Algorithm writtne from scratches. This is <b>not</b> a <code>exec</code>
              function based calculator
            `
          }
        ]
      }
    ]
  }
}
