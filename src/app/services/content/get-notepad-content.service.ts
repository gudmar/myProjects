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
        title: "About notePad",
        content: [
          {
            type: 'p',
            content: `
              This application was created as my second angular exercise. As it is a bit complex, it allowed me to 
              lear a lot about binding different application parts together into working application. I learned about
              component communication and design patterns in angular. I also picked a bit of entity testing of 
              services, directives and components in Jasmine
            `
          }
        ]
      },
      {
        type: "section",
        title: "Features",
        content: [
          {
            type: 'p',
            content: `
              NotePad consists of two applicatoins: notaPad its self and a calendar app.
              In notePad one may store notes that are organised in pages. Pages are organised in sheets.
              Notes can be moved, resized, added and deleted. Pages and sheets can be renamed, added and deleted.
              Colors for pages and sheets are generated automaticly, and font color is either white or black, depending
              on page lightness. Content might be stored in browser localStorage or saved to a file. That file 
              can be loaded by dropping it on page element. Notes positioning and sizes is saved with content.
            `
          },
          {
            type: 'p',
            content: `
              Calendar is a simple time organiser. It generates year view with division to months calendar weeks and 
              days. There is a week veiw and daily task view. Tasks can be added, moved, removed and editied. 
              After launching calendar user sees current year, however there is possibility to switch to any 
              year from 1000 to 3000. Years are created dynamicly. There is a little mark in day corner if there are 
              any tasks for that day. Content of calendar is saved together with notepad content to local storage or file.
              Backupped file can be uploaded by dropping it on claendar Year view.
            `
          },
          {
            type: 'article',
            title: 'Starting new document',
            content: [
              {
                type:'p',
                content: `hover over menu in upper left corner and click 'New'`
              }
            ]
          },
          {
            type: 'article',
            title: 'Adding new note',
            content: [
              {
                type:'p',
                content: `Locate 'Options' button in upper right corner of notePad, hover over it and click 'Edit mode'
                Now single click on page adds new note. If any note is focused, single click on page loses focus, and
                second adds new note`
              }
            ]
          },
          {
            type: 'article',
            title: 'Adding new page',
            content: [
              {
                type:'p',
                content: `Just click on '+' tab in upper tab section`
              }
            ]
          },
          {
            type: 'article',
            title: 'Renaming page',
            content: [
              {
                type:'p',
                content: `Double click on any tab`
              }
            ]
          },
          {
            type: 'article',
            title: 'In case of too many page tabs',
            content: [
              {
                type:'p',
                content: `Tabs that don't fit are boundled in to a single tab marked '...'. Hovering over this 
                tab oppens menu where not fitting tabs can be selected and renamed`
              }
            ]
          },
          {
            type: 'article',
            title: 'Selecting next sheet',
            content: [
              {
                type:'p',
                content: `Click one of tabs in left side of application`
              }
            ]
          },
          {
            type: 'article',
            title: 'Saving into local storage',
            content: [
              {
                type:'p',
                content: `Hover menu button in upper left corner and select save as. Then key for local storage is 
                selected. Note that saved data will not be visble in other browsers, and will be gone after 
                history clearing. To backup data save it as a file. To have date in other browser upload backupped 
                file in next browser. Hovewer there is no possiblity to synchronize this data`
              }
            ]
          }
        ]
      },     
    ]
  }
}
