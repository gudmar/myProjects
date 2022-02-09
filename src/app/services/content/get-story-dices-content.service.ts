import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStoryDicesContentService {

  constructor() { }

  getContent(){
    return [
      {
        type: "section",
        title: 'About Story Dices',
        content: [
          {
            type: 'p',
            content: `
              For one of online gatherings of Toastmasters I prepared an electronic version of a story telling game, 
              where a user throws dices, and tells a story related to drawn images.
              In this application <strong>it is guaranteed that images will not repete</strong>. 
              A user may <strong>redraw an image</strong> that is 
              not comfortable by clicking a specific cube, or <strong>redraw all images</strong> 
              with a rewind button. After clicking a burger button a user may <strong>select topics</strong>, 
              or <strong>number of cubes</strong> that will be displayed. 
              There is a menu for reminding Toastmasters Table Topic rules, 
              and informing that a story should have a structure. 
            `
          },
          {
            type:'image',
            imageName:'storyDices1.JPG',
            imageAlt: 'story dices: '
          },
          {
            type: 'p',
            content: `
              This application is designed to <strong>look good on all types of devices</strong>. 
              Especially mobiles are important, as someone may want to practise somewhere far from a computer.
            `
          },
          {
            type:'images-in-a-row',
            maxHeight: '430px',
            imageList:[
              {
                imageName:'StoryDices4.JPG',
                imageAlt: 'story dices: '
              },
              {
                imageName:'StoryDices5.JPG',
                imageAlt: 'story dices: '
              },

            ]
          },
          {
            type: 'p',
            content: `
              This application is constructed mainly in pure <strong>JavaScript</strong>. 
              <strong>Gulp</strong> was used to build it to a single file.
              For styling pure CSS, and HTML for loading pages.
              The application uses custom web elements for encapsulation an reusability. 
            `
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
            href: 'https://github.com/gudmar/storyDices',
          },
          {
            type: 'link',
            title: 'Try it out',
            href: 'https://gudmar.github.io/storyDices/',
          },
        ]
      },
    ]
  }
}
