import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAboutMeContentService {

  constructor() { }

  getContent(){
    return 
    [
      {
        type: 'section',
        title: 'About me',
        content: [
          {
            type: 'p',
            content:`
              Hi. My name is Marek, and I want to be a web developer. As learning, aspecially when one wants to 
              gain real abilities, not just learn and forget, is very time consuming I decidet to start with 
              front end developement. This page is to present things I have done during learning process. 
              Some conde might not look too nice, as it might have been written a while ago, when I knew not 
              a lot about clean code. Still I have to learn a lot, but it would be easier if I did this while 
              working. Then my working time would be used to enforce my skills and learn new stuff. I would be 
              able to learn from more experienced people.
            `
          },
          {
            type: 'p',
            content:`
            But why do I want to change my occupation? What did I do before?
            `
          },
          {
            type: 'article',
            title: 'Back to studies',
            content:[
              {
                type:'p',
                content:`
                  I graduated form automation control and robotics at Wroclaw Univercity of Technology....
                `
              }
            ]
          }
        ]

      }
    ]
  }
}
