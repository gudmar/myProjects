import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCvContentService {

    constructor() { }

    getContent(){
      return [
        {
          type:"cv-document",
          content:[
            {
              type:'cv-section-entry',
              title: 'web-development',
              content: [
                {
                  type: 'cv-additional-entry',
                  title: 'Web development',
                  subtitle: 'Self learning',
                  dates: '2019-now',
                  content:[
                    {
                      type:'skill-list',
                      content:[
                        {title:'HTML', level: 8, maxLevel: 10},
                        {title:'JS', level: 8, maxLevel: 10},
                        {title:'TS', level: 7, maxLevel: 10},
                        {title:'CSS', level: 7, maxLevel: 10},
                        {title:'SCSS', level: 4, maxLevel: 10},
                        {title:'Angular', level: 6, maxLevel: 10},
                        {title:'React', level: 5, maxLevel: 10},
                        {title:'Jasmine', level: 4, maxLevel: 10},
                      ]
                    }
                  ]          
                },
              ]
            },
            {
              type:'cv-section-entry',
              title: 'Employment',
              content: [
                {
                  type: 'cv-employment-entry',
                  title: 'Nokia Solutions and Networks',
                  subtitle: 'Software verification specialist',
                  dates: '2017-now',
                  position: 'first',
                  content:[
                    {
                      type:'unordered-list',
                      content:[
                        `Leading features from early documentation stage to regression: 
                          test design, execution and automation`,
                        'Acting as Test leader in feature teams',
                        'Creating test strategies',
                        'Creating test plans',
                        'Designing and constructing test lines (eNB, gNB)',
                        'Creating fault reports',
                        'Regression maintenance',
                        'Managing laboratory area',
                        'Training new employees'
                      ]
                    }
                  ]          
                },
                {
                  type: 'cv-employment-entry',
                  title: 'Lorenz Snack World',
                  subtitle: 'Continuous Improvement Specialist',
                  dates: '2010-2017',
                  position: 'middle',
                  content:[
                    {
                      type:'unordered-list',
                      content:[
                        'Leading investments projects',
                        'Leading implementation of lean tools like 5S, autonomous maintenance, preventive maintenance',
                        'Coordinator and head of Kaizen system',
                        'Implementation of KPI reporting system',
                        'Implementation of OEE reporting system',
                        'Training employees'
                      ]
                    }
                  ]        
                },    
                {
                  type: 'cv-employment-entry',
                  title: 'Bombardier Transportation',
                  subtitle: 'Production foreman',
                  dates: '2008-2010',
                  position: 'last',
                  content:[
                    {
                      type:'unordered-list',
                      content:[
                        'Management over train car body production nest',
                        'Responsibility for quality, costs, over 50 subordinate workers'
                      ]
                    }
                  ]
                },
              ]
            },
            {
              type:'cv-section-entry',
              title:'Education',
              content:[
                {
                  type: 'cv-additional-entry',
                  title: 'University of Science, Wrocław',
                  subtitle: 'Automatic steering and robotics, electronic',
                  dates: '2003-2008',
                  position: 'last',
                  content:[
                    {
                      type:'unordered-list',
                      content:[
                        'Programming',
                        'Optimization algorithms',
                        'Robot construction and programming'
                      ]
                    }
                  ]
                },  
              ]
            },

            {
              type: 'cv-section-entry',
              title: 'Interests',
              content:[
                {
                  type: 'cv-additional-entry',
                  content: [
                    {
                      type:'unordered-list',
                      content:[
                        'Web development',
                        'Speeches: currently in Toastmasters club',
                        'Music: playing guitar',
                        'Motorcycle',
                        `Active recreation: mountain walks, cycling`,
                        'Sailing'
                      ]
                    }
                  ]
                }
              ]
            }
        ]
      }
    ]
  }
}
