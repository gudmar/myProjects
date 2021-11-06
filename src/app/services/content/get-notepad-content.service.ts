import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNotepadContentService {

  constructor() { }
  
  getContent(){
    return [
      {
        type: "section",
        title: "About",
        content: [
          {
            type: 'p',
            content: `
              This application was created as my second angular exercise. As it is a bit more complex than tic-tac-toe game.
              It allowed me to learn a lot about binding components into working application. Another purpose of this exercise
              was to pick up Jasmine component and directive testing.
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
                  <b>NotePad</b> allowes user to organise notes in pages, and to organise pages into sheets. Notes can be resized
                  and moved in page components. New pages and sheets can be added, deleted, renamed. So this binds MicroSoft 
                  sticky notes and oneNote functionalities, but can be used cross platform without installing anything. Content 
                  is stored in browsers local stroage, so no need to register and send your data anywhere. 
                `
              },
            ]
          },
          {
            type:'image',
            imageName:'_notePad2.jpg',
            imageAlt: 'Notes: overview'
          },
          {
            type: 'article',
            title: 'Calendar',
            content: [
              {
                type: 'p',
                content: `
                  <b>Calendar</b> is a simple task organiser. It generates year view with division to months, calendar weeks and 
                  days. There is a week veiw and daily task view. Tasks can be added, moved, removed and editied. 
                  After launching calendar user sees current year, however there is possibility to switch to any 
                  year from 1000 to 3000. Years are created dynamicly. There is a little mark in day corner if there are 
                  any tasks for that day. The more tasks, the darker day background becomes.
                `
              },
            ]
          },
          {
            type:'image',
            imageName:'_notePad4_calendar.jpg',
            imageAlt: 'calendar: overview'
          },
          {
            type: 'article',
            title: 'Linker',
            content: [
              {
                type: 'p',
                content: `
                <b>Linker</b> is a functionality allowing user to save a link, its title and description to a local storage.
                There is a search box allowing quick search. Just click found link, and content will be oppened in a new 
                tab. Very usefull in professional life, as I have over 100 links that are handy in my current job. But
                how to efficiently find anything in that great number of links without this kind of searcher?
                `
              },
            ]
          },
          {
            type:'image',
            imageName:'_notePad3_linker.jpg',
            imageAlt: 'linker: overview'
          },
          {
            type: 'article',
            title: 'Saving content',
            content: [
              {
                type: 'information-note',
                severity: 'error',
                content: `Content is not saved automaticly. Hit <b>Ctrl+s</b> to save, or <b>Menu/Save as</b> to 
                select a name for current document`
              },
              {
                type:'p',
                content: `Whole application state is saved to a browser local storage. Thanks to this data is safe on users
                computer, no need to send it anywhere and fear that it is processed or viewed by anyone. Drawback is, that 
                this is only in one browsers memory, so will not be available in another browser on the same machine, or 
                cross machines. There is a way around it: data may be backupped to a file, and later uploaded. Of course
                this is not a great solution in case user is used to cloud, but this is only a front end application 
                working in a browser.`
              },
              {
                type:'image',
                imageName:'_notePad7_saveAs.jpg',
                imageAlt: 'save application state window'
              },
            ]
          },
          {
            type: 'article',
            title: 'Help',
            content: [
              {
                type: 'p',
                content: `
                Application usage should be understandable after reading a help section and trying it out.
                `
              },
              {
                type:'image',
                imageName:'_notePad6_help.jpg',
                imageAlt: 'help section'
              },
            ]
          },
          {
            type: 'article',
            title: 'Some more features',
            content: [
              {
                type:'unordered-list',
                content:[
                  `<code>Ctrl+l</code> makes a link out of selected notes content in edit mode`,
                  `<code>Ctrl+m</code> makes a copyable item out of selected notes content in edit mode. Just click on 
                  copyable item in non edit mode to have content in a clipboard. No need to highlight, right-click and 
                  search menu,`,
                  `<code>Ctrl+d</code> deletes highlighted content of note,`,
                  `<code>Ctrl+e</code> toggles edit mode in notes application,`,
                  `Font color is selected automaticly to fit backgorund. Background page color may be altered in 
                  <i>Options</i> menu`
                ]
              },
            ]
          },
          {
            type: 'information-note',
            severity: 'info',
            content: `This application was and is being tested in every day work, however I can give no warranty something
            goes wrong, so please concider entrusting really important data that is not backupped anywhere.`
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
            href: 'https://github.com/gudmar/notePad/',
          },
          {
            type: 'link',
            title: 'Try it out',
            href: 'https://gudmar.github.io/NotePad/',
          },

  ]
  }
    ]
  }
}
