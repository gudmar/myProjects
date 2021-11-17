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
              Hi. My name is Marek, and I want to be a web developer. I started my learning path
              from the front end. This page is to present things I have done during learning process. 
              Some of them were created a long ago, and some of them are quite recent.
            `
          },
          {
            type: 'article',
            title: 'But why do I want to change my occupation? What did I do before?',
            content:[
              {
                type:'p',
                content:`
                  After graduating form <strong>automation control and robotics</strong> at Wroclaw Univercity of Technology 
                  I was curious of my capabilities and at that time I wanted to work with people. I got a great
                  opportuinty for a fresh graduate, to try myself as a <strong>production former in a train factory</strong>. </br>
                  At my second job in food industry, thanks to getting leading roles in all sorts of projects 
                  I had a chance to try test and work out my leadership abbilities.
                  I was responsible for among others for 
                  <strong>implementing lean manufacturing tools, leading Kaizen system, some investment projects or
                  implementation of KPI measurement system</strong>. Handling projects from end to end allowed me to
                  develop as a <strong>trainer</strong>.
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
                  I regretted letting go everything I learned during studies. I stopped using linux, and
                  I gave up programming (not mentioning some VBA scripts), and programming was 
                  something I was not bad at, and it was something I enjoyed. Moreover I noticed I would
                  not be the best manager, and becoming a manager was something I had in mind starting 
                  my adventure at production.<br>
                  At that time I made a job market research and decided to become a programmer. But a man
                  does not become a programmer that easly. I had to improve my skills. I made a decision to
                  become a verification engineer in telecommunications. Everything needed for an interview
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
                  Being a father of a few small <strong>kids</strong> and <strong>learning web developement</strong> 
                  from scratches takes most of my spare time. 
                  However I could call this my passion, as I really enjoy both. But when I have to rest
                  from sitting in front of a computer I willingly grab my <strong>guitar</strong>, 
                  or go for a <strong>motorcycle</strong> ride.
                  There are a few more things I like doing, like <strong>sailing, mountain walks or offroad</strong>, but I had to
                  give them up, at least for now.
                `
              }
            ]
          }

        ]

      }
    ]
  }
}
