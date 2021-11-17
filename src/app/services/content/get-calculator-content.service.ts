import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCalculatorContentService {

  constructor() { }

  getContent(){
    return [
      {
        type: 'section',
        title: 'About calculator',
        content:[
          {
            type: 'p',
            content: `
            Calculator was my first code in JS. Idea was to write it without using build in functions like 
            <code>exec()</code>, so I could practice parsing a math expression written in natural order.
            Up then I knew nothing about clean code or test driven development, so result contained a lot of bugs 
            I spotted later during code refabrication.
            `
          }
        ]
      },
      {
        type: 'section',
        title: 'Cleaning code',
        content:[
          {
            type: 'p',
            content: `
            Idea of comming back to calculator come to me after finishing training related to <strong>clean code</strong>. 
            I decided to see how this code should look like. I used <strong>TDD</strong> for this project, 
            and google calculator was a benchmark for me. 
            TDD approach made this project possible to be finished, as automatic tests 
            ensured me that changing code did not spoil anything. 
            Moreover I was sure that all cases were covered. 
            During cleaning process I always searched for better option. 
            This resulted in for example changing 
            whole validation function to one based on <strong>regular expression</strong>.
            This approach turned out to be more readable and less error prone.
            `
          }
        ]
      },
      {
        type: 'section',
        title: 'How does calculator work?',
        content:[
          {
            type: 'article',
            title: 'Validator',
            content: [
              {
                type: 'p',
                content: `
                  First task that needs to be completed is validation of expression. If expression gives no chance 
                  to be evaluated, it makes no sense to precess it further.
                `
              }
            ]
          },
          {
            type: 'article',
            title: 'Converter',
            content: [
              {
                type: 'p',
                content: `
                  Second task that needs to be done is preparsing a strig expression. This function takes string, 
                  and returns an array of strings, where each element of this array is a symbol to process in 
                  further algorithm.
                  For example: <code>converter.convert('(123-34)+(-43.33)/3')</code> will be translated to 
                  ['(', '123', '-', '34', ')', '+', '(', '-', '-43.33', ')', '/', '3' ].
                `
              }
            ]
          },
          {
            type: 'article',
            title: 'Insert brackets from left',
            content: [
              {
                type: 'p',
                content: `
                  Lets take <i>1/2*3</i> expression as an example. It should be calculated from left to right. 
                  To make sure it happens in right way it should be written with brackets: <i>(1/2)*3</i>. 
                  Otherwise to prefix conversion might not work in all cases. Google calculator also adds brackets 
                  to expressions like this to show the way calculation is done.
              
                `
              }
            ]
          },
          {
            type: 'article',
            title: 'Infix to prefix',
            content: [
              {
                type: 'p',
                content: `
                  Infix is the name of natural mathematical expression order people are used to <i>(a+b)*(c+d)</i>. 
                  For programmer it is easier to convert this to prefix notation <i>*+ab+cd</i>. 
                  There is a simple algorithm that calculates result from prefix notation.
                `
              }
            ]
          },
          {
            type: 'article',
            title: 'Calculate',
            content: [
              {
                type: 'p',
                content: `
                Last step is to calculate result from prefix notation.
                `
              }
            ]
          },
        ]
      },
      {
        type: 'section',
        title: 'Difference from google calculator',
        content: [
          {
            type: 'p',
            content: `
              It was assumed, that expression 2+++2 or 2+-+2 is a valid expression. There are no brackets used, 
              and normally mathematical expressions are not written in this way, however if <i>-2</i> is valid, 
              <i>+2</i> is also valid, but this plus sign is never written down, why expression with a few plus 
              minus signs without brackets would not be valid?
            `
          }
        ]
      },  
      {
        type: 'section',
        title: 'Features',
        content: [
          {
            type: 'p',
            content: `
              Except for well tested validation and calculations calculator changes shape and keys order 
              when screen is resized, so it is usable on smaller devices. When expression becomes large, there 
              is a scroll bar added to display. '(', ')', '*', '/', '+', '-', '.' symbols and digits are supported.
            `
          }
        ]
      },  
      {
        type: 'images-in-a-row',
        imageList:[
          {        
            imageName: 'Calculator1.JPG',
            imageAlt: 'Calculator: bigger screen version'
          },
          {        
            imageName: 'Calculator2.JPG',
            imageAlt: 'Calculator: smaller screen version'
          },          
        ]
      },       
      {
        type: 'section',
        title: 'Testing',
        content: [
          {
            type: 'p',
            content: `
              Each functionality has a file with full test coverage. 
            `
          }
        ]
      },
      {
        type: 'section',
        title: 'References',
        content: [
          {
            type: 'link',
            title: 'Github project link with precise readme file:',
            href: 'https://github.com/gudmar/calculator_cleaningLegacyCode',
          },
          {
            type: 'link',
            title: 'Try it out',
            href: 'https://gudmar.github.io/calculator/',
          },
          {
            type: 'link',
            title: 'Calculator test results',
            href: 'https://gudmar.github.io/calculator/tests',
          },
          {
            type: 'link',
            title: 'Some page about infix to prefix conversion:',
            href: 'https://scanftree.com/Data_Structure/infix-to-prefix',
          },
          {
            type: 'link',
            title: 'Evaluating prefix notation:',
            href: 'https://www.free-online-calculator-use.com/prefix-evaluator.html',
          },
        ]
      },
    ]
  }
}
