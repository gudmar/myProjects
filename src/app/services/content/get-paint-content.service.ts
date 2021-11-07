import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPaintContentService {

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
            title: 'Notes',
            content: [
              {
                type: 'p',
                content: `
                `
              },
            ]
          },
          {
            type:'image',
            imageName:'',
            imageAlt: ''
          },
    ]
     }
    ]
  }

}
