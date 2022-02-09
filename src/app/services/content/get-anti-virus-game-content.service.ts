import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAntiVirusGameContentService {

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
              A very simple game. Your computer was infected with viruses, and soon your disc will be encrypted. You
              have to launch an antivirus program before this happens. Antivirus is hidden in the start menu. But 
              beware. All popup windows have to be closed when launching antivirus. More windows you shut before 
              activating antivirus, more score you get, but you are time limited.
            `
          },
          {
            type:'image',
            imageName:'antiVirus_2.png',
            imageAlt: 'Antivirus game: lot of windows',
          },
          {
            type: 'p',
            content: `
              There are 3 hardness levels: easy (possible to complete), medium (possibly no human may win it),
              hard (for certain no human may win it)
            `
          },
          {
            type:'image',
            imageName:'antiVirus_1.png',
            imageAlt: 'Antivirus game: hardnes levels',
          },
          {
            type: 'p',
            content: `
              When this game was created I was starting my adventure with web developement, and I had no knowledge of 
              tools like gulp or of clean code. Fortunately this program is not too complicated, so it is still readable,
              but I wanted to keep it in one file, and this fact makes things more complicated.
            `
          },
          {
            type: 'p',
            content: `
            I am not an author of used SVG images. Please click a question mark in the left top corner of the hardnes 
            level window to get source links. All SVGs were free to use in non commertial applications.
            `
          },
          {
            type:'image',
            imageName:'antiVirus_5.png',
            imageAlt: 'Credentials',
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
            href: 'https://github.com/gudmar/gameAntiVirus',
          },
          {
            type: 'link',
            title: 'Try it out',
            href: 'https://gudmar.github.io/anti-virus-game/',
          },
          {
            type: 'link',
            title: 'Windows XP alike svg background',
            href: 'https://store.kde.org/p/1025831/',
          },
          {
            type: 'link',
            title: 'Bug svg image',
            href: 'https://www.svgrepo.com/svg/59213/bug',
          },
          {
            type: 'link',
            title: 'Rest svg images',
            href: 'https://freeicons.io/',
          },
        ]
      },
    ]
  }
}
