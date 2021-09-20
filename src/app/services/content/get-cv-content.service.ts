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
            title: 'web-developement',
            content: [
              {
                type: 'cv-additional-entry',
                title: 'Web developement',
                subtitle: 'Self learning',
                dates: '2019-now',
                content:[
                  {
                    type:'skill-list',
                    content:[
                      {title:'HTML', level: 8, maxLevel: 10},
                      {title:'JS', level: 7, maxLevel: 10},
                      {title:'CSS', level: 6, maxLevel: 10},
                      {title:'SCSS', level: 4, maxLevel: 10},
                      {title:'Angular', level: 5, maxLevel: 10},
                      {title:'Gulp', level: 4, maxLevel: 10},
                      {title:'React', level: 3, maxLevel: 10},
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
                      'Laboratory management',
                      'Leading features from end to end',
                      'Acting as Test leader in feature owner teams',
                      'Creating test strategies',
                      'Creating test planes',
                      'Designing and constructing testlines',
                      'Creating fault reports',
                      'Reporting test results, responsibility for test database',
                      'Test automation: writing mainly in Robot framework wiht little help in python',
                      'Regression maitenance'
                    ]
                  }
                ]          
              },
              {
                type: 'cv-employment-entry',
                title: 'Lorenz snack world',
                subtitle: 'Continuous Improvement Specialist',
                dates: '2010-2017',
                position: 'middle',
                content:[
                  {
                    type:'unordered-list',
                    content:[
                      'Production management - in subsitution',
                      'Leading investments projects',
                      'Implementation of lean tools like 5S, autonomus maitenance, preventive maitenance',
                      'Cordinator and head of Kaizen system',
                      'Implementation of KPI reporting system',
                      'Implementation of OEE reporting system',
                      'Implementation of tools needed for reporting systems in VB for Excel',
                      'Organising and leading trainings'
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
                      'Management over train carbody production nest',
                      'Responsiblity for quality, costs, over 50 subordinate workers'
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
                title: 'Univercity of Science, Wrocław',
                subtitle: 'Automatic stearing and robotics, electronic dep.',
                dates: '2003-2008',
                position: 'last',
                content:[
                  {
                    type:'unordered-list',
                    content:[
                      'Programming',
                      'Optimalization algoritms',
                      'Robot construction'
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
            type:'unordered-list',
            content:[
              'Web developement',
              'Speaches: currently in Toastmasters club',
              'Music: palying guitar',
              'Motorcycle'
            ]
          }
        ]          
      }
        ]
      }
    ]
  }

}
