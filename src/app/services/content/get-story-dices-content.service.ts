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
              For one of online gatherings of Toastmasters I prepared a electronic version of story telling game, 
              where user throws dices, and tells a story related to drawn images.
              In this application it is guaranteed that images will not repete. User may redraw an image that is 
              not comfortable by clicking a specific cube, or redraw all images with rewind button. After 
              clicking a burger button user may select topics, or number of cubes 
              that will be displayed. There is a menu for reminding Toastmasters Table Topic rules, and 
              informing that a story should have a structure. 
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
              This application is designed to look good on all types of devices. Especially mobils are important, 
              as someone may want to practice somewhere far from a computer.
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
              This application is constructed mainly in pure JavaScript. Gulp was used to build it to a single file.
              For styling pure CSS, and HTML for loading pages.
              Application uses custom web elements for encapsulation an reusebility. 
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
