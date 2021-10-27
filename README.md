# MyProjects

This is my demo page with links to projects I have done. This page is created in angular and will be available under https://gudmar.github.io/

## DocumentSectionComponent:
Page is a typicly front end SPA. Data for each subpage is provided by a service. If I had a server I could build page on this services could be changed for a service that would fetch data from this server. Each subpage content is stored in a JS object, and this object is translated to html with help of <b>DocumentSectionComponent</b>. This component is recursive, so in case of nested components this component calls its self to render them. Here is a list of supported html elements:
### section
* Template:
  * section
    * h1: title,
    * document-section: recursive call to render nested content
Content of nested document section will be placed in column direction
### row-section
* Template:
  * section
    * h1: title,
    * document-section: recursive call to render nested content
Content of nested document section will be placed in flex-row direction
### article
* Template:
  * article
    * h2: title,
    * document-section: recursive call to render nested content
Content of nested document article will be placed in column direction
### p
* Template:
  * p
This is just a html paragtaph element
###unordered-list
* Template:
  * ul
    * li: el of item.content
 where item.content is a list of strings
 ### image
 * Template:
  * img src: item.imageName, alt: item.imageItemAlt
 where imageName is name of file where image i stored in src/assets folder
 ### link
 * Template
  * a href:item.href, attr.data-content: item.title
 Nicely styled and animated link with title attirbute that will be displayed on page, and href as target endpoint. This element has a <i>target: _blank</i>
 attribute set by default, so page is oppened in new tab.
 ### portfolio-entry:
 Takes:
 * title
 * route: relative route from angular routing, where target element will be displayed,
 * imageNameArray: array of image names, this images will be displayed one after another in animation, each image has to be stored in src/assests
 * content: item.content - text that will be displayed under title aside of images
 This component is for displaying a portfolio card
 ### cv-document:
 This is a wrapper for whole cv. Cv elements are displayed differently, so they are handlend by separate elements
 ### cv-employment-entry:
 Takes:
 * title: for displaying company name
 * content: document-section - so nested elements
 * subtitle: for displaying position,
 * dates: for displaying start and end of employment
 * position: first, middle, last. This is to notify timeline about position of entry on page. First entry will not have upper line connecting to previous element, last wil have filled dot with no line connecting it to next element.
 This element will display employmet history with a nice timeline on left side. It is important to keep those entries together in proper order and position property properly assigned
 ### cv-additional-entry:
 Takes:
 * title
 * subtitle
 * sates
 Good for displaying education or personal activities worth mentioning in CV. Like self learingi web developement:)
 ### cv-section-entry:
 takes:
 * title: a section title in CV
 * content: list of elements supported by document-section element.
 This is for dividing cv into sections like: employment, education, hobbies and interests, skills...
 
 ### Please note
 CV will not be printed in acceptable way, due to hardnes with forcing browser to print anything in a way end user wants it to look like. Printing CV is out of scope of this project. 
 
