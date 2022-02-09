import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMixBlendModeContentService {

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
              My very early exercise showing how <code>mix-blend-mode</code> behaves when applied with
              isolation or without isolation. There is a set of elements with 3 overlapping wheels each: a green one,
              a blue one and a red one. Each element from the set has a different <code>mix-blend-mode</code> value.
              There is a color-chooser element somewhere in this web-site (left above mix-blend-mode elements
              in a non-mobile device, and top of screen on a smaller viewport). User may choose a background
              color moving one of sliders, to see how the <code>mix-blend-mode</code> is applied to each element.

            `
          },
          {
            type: 'image',
            imageName: 'mixBlendMode2.png',
            imageAlt: 'mix-blend-mode page'
          }, 
        ]
      },
      {
        type: 'section',
        title: 'References',
        content: [
          {
            type: 'link',
            title: 'Github link.',
            href: 'https://github.com/gudmar/mix-blend-mode-notes/',
          },
          {
            type: 'link',
            title: 'Try it out',
            href: 'https://gudmar.github.io/mix-blend-mode/',
          },
        ]
      },
    ]
  }
}
