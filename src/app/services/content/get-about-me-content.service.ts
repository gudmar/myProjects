import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAboutMeContentService {

  constructor() { }

  getContent(){
    return [
      {
        type: 'section',
        title: 'About me',
        content: [
          {
            type: 'image-paragraph',
            imageName: 'myPhotoTransparent.png',
            imageAlt: 'My photo',
            content:`
              Hi. My name is Marek, and I want to be a professional web developer. I started my learning path
              from the front end. This page is to present things I have done during the learning process. 
              Some of them were created a long ago, and others are quite recent.
            `
          },
          {
            type: 'article',
            title: 'But why do I want to change my occupation? What have I done before?',
            content:[
              {
                type:'p',
                content:`
                  After graduating form <strong>automation control and robotics</strong> at Wroclaw University of Technology 
                  I was curious of my capabilities and at that time I wanted to work with people. I got a great
                  opportunity for a fresh graduate, to try myself as a <strong>production foreman in a train factory</strong>. </br>
                  At my second job in a food industry, thanks to getting leading roles in all sorts of projects 
                  I had a chance to improve my leadership skills. I was responsible, among others, for 
                  <strong>implementation of lean manufacturing tools, leading Kaizen system, some investment projects and
                  implementation of KPI measurement system</strong>. Handling projects from end to end allowed me to
                  discover, that I am a good <strong>trainer</strong>.
                `
              }
            ]
          },
          {
            type: 'article',
            title: 'So interesting. Why would I go to IT then...',
            content:[
              {
                type:'p',
                content:`
                  I regretted that skills I had learned during studies started fading.
                  I had no opportunities to use linux, and
                  I stopped programming, and programming was 
                  something I enjoyed. Moreover, I noticed I would
                  not enjoy being a manager and becoming a manager was something I had in mind when starting 
                  my adventure at production.<br>
                  At that time I made a job market research and decided to become a programmer. But a man
                  does not become a programmer that easily. I had to improve my skills. I made a decision to
                  become a verification engineer in telecommunications for a while. Everything needed for an interview
                  might have been learned quite fast and working as a tester would give me some idea how 
                  software is being made.
                `
              }
            ]
          },
          {
            type: 'article',
            title: 'What do I do when I do not work',
            content:[
              {
                type:'p',
                content:`
                  Being a father of a few small <strong>kids</strong> and <strong>learning web development</strong> 
                  from scratches takes most of my spare time. 
                  However, I could call this my passion, as I really enjoy both. But when I have to rest
                  from sitting in front of a computer I willingly grab my <strong>guitar</strong>, 
                  or go for a <strong>motorcycle</strong> ride.
                  There are a few more things I like doing, like <strong>sailing, mountain walks or offroad</strong>, 
                  but I had to give them up. At least for now.
                `
              }
            ]
          }

        ]

      }
    ]
  }
}
