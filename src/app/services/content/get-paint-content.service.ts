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
            type: 'information-note',
            severity: 'warn',
            content: `This is a very limited application, as it is only an exercise, thats implementatnio took about 5 hours.`
          },
          {
            type:'image',
            imageName:'Paint2.jpg',
            imageAlt: 'Shape drawer',
          },
          {
            type: 'p',
            content: `
            I always dreamed of creating a program that would allow user to sketch something, but when I would start coding
            it would turn out that there were a lot of things that needed binding, taking into concideration, code soon was 
            becomming messy and I would drop the project. However once there was a slight difference. One day I was reading 
            about <a href="https://dev.to/shijiezhou/top-10-javascript-patterns-every-developers-like-168p" target="_blank">
            design patterns</a>. While reading I was making notes and thinking where I could use each of patters, and then 
            it come. A bridge pattern seemed perfect to write a paint program. I started coding, and it turned out, that 
            whole application was ready in ... 5 hours or so... Of course it is a very simple tool missing a lot of 
            usefull features, like history, abbility to alter already created objects, but it is a good base to be 
            developed, or a good starting point for writing more complex tool in future.
            `
          }
        ]
      },
      {
        type: "section",
        title: "More about implementation",
        content: [
          {
            type: 'article',
            title: 'Bridge pattern',
            content: [
              {
                type: 'p',
                content: `
                  There is a <q>Shape</q> class, that knows that a shape can be drawn, deleted or modified. It knows nothing 
                  about how to create this shape, so it needs another class that has this knowledge. Shape class is a bridge 
                  class. It uses other classes and other class methods to draw specific shapes. This bridge class may be 
                  used on canvas (raster images) or can draw vectro graphic (svg). It may draw a circle, triangle, path... It 
                  may draw in red, green, with a stroke or without one. It does not metter, as it has no knowledge what it is doing.
                  The thing that is created by a bridge class depends on a class that is passed to it when it is being created.                  
                `
              },
              {
                type: 'p',
                content: `
                  Other usage of a bridge pattern is lets say creation of a button. Buttons may have different look or 
                  behaviour on hover or on click. Common for buttons would be size, color theme, way they handle 
                  overflow of too long label. There may be a generic class for common button behaviour and a set of 
                  classes for specific buttons. To learn more about this please get familiar with my 
                  <a href="https://gudmar.github.io/Widgets/" target="_blank">widgets</a> site. Both buttons and circles are
                  implemented in this way.
                `
              },
            ]
          },
          {
            type: 'article',
            title: 'Other classes',
            content: [
              {
                type: 'p',
                content: `
                  <b>Figure</b> class knows how to set stroke and fill to created feagure, how figure should be deleted and
                  how to calculate first point of figure. Deletion of figure is related to a dashed frame that is displayed
                  on element creation. Each time element is resized this frame is deleted and recreated. Each time mouse button
                  is released, this figure is deleted. This delation has nothing to do with obliteration of once painted 
                  figure, as this tool has no such feature.
                `
              },
              {
                type: 'p',
                content: `
                  Now low layer classes, having knowledge how to create particular svg elements. Each of those classes 
                  extend Figure class and each has methods named in the same way (the same interface), 
                  so more generic classes can use them not knowing what actualy they are drawing. 
                `
              },
              {
                type:'unordered-list',
                content: [
                  `<b>Pen</b> is a path drawing class.`,
                  `<b>Circle</b> is a circle drawing class.`,
                  `<b>Rectangle</b> is a rectangle drawing class.`,
                  `<b>Triangle</b> is a triangle drawing class.`,
                ]
              },
              {
                type: 'p',
                content: `
                  <b>Navigator</b> class taking care of application state. Each time a figure, color or stroke to fill
                  are changed, this class reacts to this. It has knowledge of current programm state. 
                `
              },
              {
                type: 'p',
                content: `
                  <b>Mediator</b>. This class name is missleading, but at time of its creation I was still not aware of 
                  importance of this. This class is responsible for handling drawing events like mousedown, mouseup or 
                  mousemove.
                `
              },
              {
                type: 'p',
                content: `
                  To learn more please visit github project page (in reference section). Code is not very clean,
                  but still it is understandable.
                `
              },
            ]
          },
        ]
     },
     {
      type: "section",
      title: "Features",
      content: [
        {
          type:'unordered-list',
          content: [
            `Drawing a path,`,
            `Drawing a circle,`,
            `Drawing a triangle,`,
            `Drawing a rectangle`,
            'Changing figures stroke color',
            'Changing figures fill color',
            'Supported colors are: transparent, red, green, blue, yellow, brown and black,',
            `Save function, that prints ready svg content that can be saved in a text file with .svg extention into
            console.`,
            'Resizeblity / responsivenes. Reacts to browser window being resized.'
          ]
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
          href: 'https://github.com/gudmar/Paint',
        },
        {
          type: 'link',
          title: 'Try it out',
          href: 'https://gudmar.github.io/paint/',
        },
        {
          type: 'link',
          title: 'Bridge design pattern',
          href: 'https://www.geeksforgeeks.org/bridge-design-pattern/',
        },
      ]
    },
    ]
  }

}
