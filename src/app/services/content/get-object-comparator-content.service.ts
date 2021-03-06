import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetObjectComparatorContentService {

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
              Comparing objects in JS may seem easy. There can be a <code>===</code>, <code>==</code> or <code>Object.is()</code>
              used for this task, but this only <strong>checks if objects are exactly the same instances</strong>, 
              so if variables bound to 
              objects point to the same place in memory. In real life it is <strong>more useful to check if objects contain the same
              values under keys named in the same way</strong>. 
              We could write a simple function for comparing all object keys and 
              values held under these keys, but JS objects are a bit more complex than that. 
              In real life <strong>objects can hold all sort of variable types</strong>: 
              primitives, strings, arrays, maps, sets, functions etc. In case of a pure object 
              key can be only of type string or symbol, but when it comes to a map object, everything may be a key. Even 
              a nested object. Moreover, each JS object property has a descriptor, and this descriptor holds, among others, 
              information if this property is <storng>enumerable</strong> or not. 
              Enumerable properties will show up when iterated with 
              an <code>in</code> operator, but not enumerable are inaccessible with <code>in</code> 
              or <code>Object.keys()</code>. 
            `
          },
          {
            type: 'p',
            content: `
              <strong>What about arrays?</strong> We could compare length and check if each <code>item[index]</code> matches 
              <code>item[index]</code> from second array. But what if <strong>we would like to check if arrays have the same 
              values, no matter what is the index of those values</strong>?
            `
          },
          {
            type: 'p',
            content: `
              If we considerate all above problems it turns out, that a simple object comparison is not simple at all.
              Code that would handle all cases gets quite big and moreover needs a lot of testing. So it is a good idea 
              to have a well tested class that does the job, and can be reused in all projects that need this.
            `
          },
          {
            type: 'p',
            content: `
              <b>But who may need object deep comparison?</b> Every application, except for trivial ones, has a state. 
              Every time a user clicks a button, opens a dialog window, a message is displayed, application changes its 
              state. This state may be described as a JS object and may be hold somewhere in memory. Application states
              needs comparison to see if for example application view needs to be changed. Finding and changing 
              an element in DOM is quite expensive, so better not to do this if not needed, and it is better to 
              change only elements that really need a change, and leave all others in piece.
            `
          },
          {
            type: 'p',
            content: `
              <b>To sum up</b>, this piece of code is written to compare all sorts of JS objects. It can compare 
              objects taking into account enumerable and not enumerable properties. It can check if arrays have the 
              same values, regardless of their index. It compares primitives, arrays, enumerables, not enumerables, 
              functions, maps, sets and dates. Moreover, it takes into consideration special values like 
              <q>POSITIVE_INFINITY</q> or <q>NEGATIVE_INFINITY</q>
            `
          },

        ]
      },
      {
        type: "section",
        title: "Interface",
        content: [
          {
            type: 'article',
            title: 'List of methods',
            content: [
              {
                type:'unordered-list',
                content: [
                  `<code>static isPrimitive(a:any)</code>: checks if <q>a</q> is a primitive, so if it is a 
                  <code>number</code>, <code>string</code>, <code>boolean</code>, <code>bigint</code>, <code>undefined</code>,
                   <code>null</code> or a <code>symbol</code>`,
                  `<code>areEqualEnumerable(a:any, b:any)</code> checks if two values are equal, taking into 
                  consideration only enumerables`,
                  `<code>areEqualNonEnumerable(a:any, b:any)</code> checks if <q>a</q> and <q>b</b> are equal taking into
                  account non enumerable properties`,
                  `<code>static areEqualEnumerableArrayValuesCompare(a, b)(a:any, b:any)</code> checks if objects <q>a</q> 
                  and <q>b</b> are equal taking into account enumerable object properties and checking if arrays in object
                  have the same values and lengths (not looking at array indexes)`,
                  `<code>static areEqualNotEnumerableArrayValuesCompare(a, b)(a:any, b:any)</code> checks if objects <q>a</q> 
                  and <q>b</b> are equal taking into account <b>not</b> enumerable object properties and checking if arrays in object
                  have the same values and lengths (not looking at array indexes)`,
                  `<code>static areEqualEnumerable(a:any, b:any)</code> Checks if objects are equal, looking only at enumerable 
                  properties and taking arrays indexes into consideration,`,
                  `<code>static areEqualNotEnumerable(a:any, b:any)</code> Checks if objects are equal, looking also at 
                  non enumerable properties and taking arrays indexes into consideration,`,
                  `<code>static areFunctionsEqual(a:any, b:any):boolean</code> compares 2 functions using a <code>toString()</code> method.`,
                  `<code>static areMapsEqual(a:any, b:any):boolean</code> compares two map objects`,
                  `<code>static areSetsEqual(a:any, b:any):boolean</code> compares two set objects`,
                  `<code>static areDatesEqual(a:any, b:any):boolean</code> compares two dates`,
                  `<code>areArraysEqual(a:any, b:any, keyEnumerateMethod=Object.keys)</code> compares two arrays taking index into 
                  consideration.`,
                  `<code>haveArraysSameValues(a:any, b:any, keyEnumerateMethod = Object.keys):boolean</code> 
                  Checks if arrays have the same values, regarding arrayIndexes.`,
                  `<code>areArrays(arrayOfArgs:any[]):boolean</code> returns true if all passed elements are type of <code>array</code>`,
                  `<code>areFunctions(arrayOfArgs:any[]):boolean</code> returns true if all passed elements are type of <code>function</code>`,
                  `<code>areMaps(arrayOfArgs:any[]):boolean</code> returns true if all passed elements are maps`,
                  `<code>areSets(arrayOfArgs:any[]):boolean</code> returns true if all passed elements are sets`,
                  `<code>areDates(arrayOfArgs:any[]):boolean</code> returns true if all passed elements are dates`,
                ]
              },
              {
                type: 'article',
                title: 'Summary of methods',
                content: [
                  {
                    type: 'p',
                    content: `
                      A lot of stuff. Most important methods to compare objects are:
                    `
                  },
                  {
                    type:'unordered-list',
                    content: [
                      'areEqualEnumerable', 
                      'areEqualNotEnumerable', 
                      'areEqualNotEnumerableArrayValueCompare', 
                      'areEqualEnumerableArrayValuesCompare',
                    ]
                  }
                ]
              },
            ]
          },
          {
            type:'image',
            imageName:'',
            imageAlt: ''
          },
        ]
     },
     {
      type: "section",
      title: "Tests",
      content: [
        {
          type: 'p',
          content: `
            Object comparison class was tested with 51 test cases. Please see references section to view test results,
            please visit github repository to view tests.
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
          title: 'Github project link.',
          href: 'https://github.com/gudmar/objectComparatorJS',
        },
        {
          type: 'link',
          title: 'See test results life report',
          href: 'https://gudmar.github.io/objectComparator/',
        },        
]
}
    ]
    }
  
}
