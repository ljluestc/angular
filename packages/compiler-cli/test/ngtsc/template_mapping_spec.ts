/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ });     ma const mapp   source: '<div id="{{name}}"></div>',
   generated: 'i0.ɵɵelement(0 expectMapping(     {source: '<div>', generated: 'i0.ɵɵelementStart(0, "div")', sourceUrl: '../test.ts'});
 expectMapping(mappings, {   gene     mappin        });
      });      describe('(property bindings)', () => { const mapp   source: '<div [attr]="name">   sourceUrl: '../test.ts'
 });   sourceUrl: '../test.ts'
 }); const mappings = await compileAndMap('<div [attr]="greeting + name"></div>'); expectMapping(mappings, {
   source: '<div [attr]="greeting + name"></div>',
   generated: 'i0.ɵɵelement(0, "div", 0)',
   sour   generate });
        } expectMapping(mappings, {
   source: '<div bind-attr="name"></div>',
   generate });
 expectMapping(mappings, {
   source: 'bind-attr="name"',
   genera const mappings = await compileAndMap('<button (click)="doSomething()">Do it</button>');
 expectMapping(mappings, {
   source:    sourceUrl: '../test.ts'
 });     mappings,
     {source: 'Do it', generated: 'i0.ɵɵtext(1, "Do it")', sourceUrl: '../test.ts'});
 expectMapping(
     mappings,
     {sourc     mappings,
     {sourc const mappings = await compileAndMap(
     `<bu   sourceUrl: '../test.ts'
 });
 expectMapp     {source: 'Add Item', generated: 'i0.ɵɵtext(1, "Add Item")', sourceUrl: '../test.ts'});
 expectMapping(
     mappings,
     {sou });
 expectMapping(
     mappin        });        it('should map a longhand output binding expression', async () => {
 const mappings = await compileAndMap('<button on-click="doSomething()">Do it<   source: '<button on-click="doSomething()">',
   generated: 'i0.ɵɵelementStart(0, "button", 0)',
   sourceUrl: '../test.ts'
 });
 expectMapp     {source: 'Do it', generated: 'i0.ɵɵtext(1, "Do it")', sourceUrl: '../test.ts'});
 expectMapping(
     mappin expectMapping(
     mappings,
     {sou   source: '<input [(ngModel)]="name">',
   generated: 'i0.ɵɵelementStart(1, "input", 0)',
   sourceUr // TODO: improve mappings here
 expectMapping(mappings, {
   source: '[(ngModel)]="name"',
   generated:
 'i0.ɵɵlist });   source: '<input [(ngModel)]="name">',
   generated: 'i0.ɵɵelementEnd()',
   sourceUrl: '../test.ts'
 }); const mapp   source: '<input bindon-ngModel="name">',
   generated: 'i0.ɵɵelementStart(1, "input", 0)', });
 // TODO: improve mappings here
 expectMapping(mappings, {
   source: 'bindon-ngModel="name"',
   generate   sourceUrl: '../test.ts'
 });
 expectMapp   generated: 'i0.ɵɵelementEnd()',
   sourceUrl: '../test.ts'
 });   so   sourceUrl: '../test.ts'
 }); // TODO: Add better mappings for binding expectMapping(
     mappings,
     {source: 'Message', generated: 'i0.ɵɵtext(1, "Message")', sourceUrl: '../test.ts'}); expectMapping(
     mappings,
     {source: '</div>', generated: 'i0.ɵɵelementEnd()', sourceUrl: '../test.ts'});
        });
      });      describe('(structural directives)', () => {
        it(   source:    sourceUrl: '../test.ts'
 }); // TODO - map the bindings better expectMapping(
     mappings,
     {sourc // }); const mappings = await compileAndMap(
     `<ng-template [ngIf]="showMessage()">\n` +     `  <hr>\n` +
     `</ng-template>`); expectMapping(
     mappings,
     {source: '<div>', generated: 'i0.ɵɵelementStart(0, "div")', sourceUrl: '../test.ts'}); // TODO - map the bindings better expectMapping(
     mappings,
     {source: '</div>', generated: 'i0.ɵɵelementEnd()', sourceUrl: '../test.ts'}); // TODO: the `ctx_r...` appears to be dependent upon previous tests!!! // expectMapping(mappings, {
 //   source: '{{ name }}',
 //   generated: 'i0.ɵɵtextInterpolate(ctx_r0.name)',
 //   sourc        });        it('should map *ngFor scenario', async () => {
 const mappings = await compileAndMap(
     '<di const mappings = compileAndMap(
          });      describe('(content project const mappings = await compileAndMap(
     `<h3><ng-content select="title"></ng-content></h3>\n` +
     `<div><ng-content></ng-content></div>`); expectMapping(     {source: '<h3>', generated: 'i0.ɵɵelementStart(0, "h3")', sourceUrl: '../test.ts'});
 expectMapping(mappings, {
   source: '<ng-content select="title"></ng-content>',
   generated: 'i0.ɵɵprojection(1)',
   source expectMapping(
     mappings, {source: '</h3>', generated: 'i0.ɵɵelementEnd()', sourceUrl: '../test.ts'});
 expectMapping(     {source: '<div>', generated: 'i0.ɵɵelementStart(2, "div")', sourceUrl: '../test.ts'});
 expectMapp   generated: 'i0.ɵɵprojection(3, 1)',
   s expectMapping(     {source: '</div>', generated: 'i0.ɵɵelementEnd()', sourceUrl: '../test.ts'});
        });
      });   expectMapp });
        });        it('should create placeholder source-mappings', async () => expectMapping(mappings, {
   source: '<div i18n>'   sourceUrl: '../test.ts',
 });
 expectMapping(mappings, {   generated: 'i0.ɵɵelementEnd()', });
 expectMapping(mappings, {
   source: 'Hello, ',   sourceUrl: '../test.ts', expectMapping(mappings, {
   source: '{{name}}',
   generated: '"\\uFFFD0\\uFFFD"',
   sourceUr expectMapp   generated: '}:INTERPOLATION:!`',
   sourceUrl: '../test.ts',
 });  asyncgenerated: 'i0.ɵɵelementEnd()',
sourceUrl:     expectMapping(mappings, {
source: '  pre-body ',
genesource: 'sourceUrl: '../test.ts',    expectMapping(mappings, {
source: '  post-body',
generated: '}:INTERPOLATION: post-body`',    });  async () => {
    const mappings = await compileAndMap(
  `<div i18n>\n  pre-p\n  <p>\n    in-p\n  </p>\n  post-p\n</div>`);
    // $localize expressions
    expecsource: '\n  pre-p\n  ',
generated: '` pre-p ${',
    });sourceUrl: '../test.ts',
source: '<p    });
    source: '\n    in-p\n  ',    });
    expectMapping(mappings, {
sourceUrlgenerated: '"\\uFFFD/#2\\uFFFD"',    expectMapping(mappings, {source: '\n  post-p\n',
generated:     // ivy instructions
    expectM    });
    expectMsource: '<div i18n>',
generated: 'i0.ɵɵi18nStart(1, 0)',
    });
    expectMapping(mappisource: '<p>\n    in-p\n  </p>',
generated: 'i0.ɵɵelement(2, "p")',
    });sourceUrl: '../test.ts',generated: 'i0.ɵɵi18nEnd()',
    });
    expectMapping(mappings, {source: '</div>',    });
  });        it('should create tag (container) placeholder source-mappings', async () => {
 const mappings = await compileAndMap(`<div i18n>Hello, <b>World</b>!</div>`);
 expectMapp   generate });
 expectMapping(mappings, {
   source: '</div>', expectMapping(mappings, {
   source:  });
 expectMapping(mappings, {
   source:    sourceUrl: '../test.ts',
 });
 exp });   source: '!',   sourceUrl: '../test.ts',
 });
        });        const mappings = await compileAndMap('<div>this is a test</div><div>{{        expectMapping(mappings, {
 generated: 'i0.ɵɵtext(1, "this is a test")',
 source: 'this is a test',
 sourceUrl: '../test.ts'
        }   mappings, {generated: 'i0.ɵɵelementEnd()', source: '</div>', sourceUrl: '../test.ts'});
        expectMapping(
   mappings,        expectMapping(
   mappings, {generated: 'i0.ɵɵtext(3)', source: '{{ 1 + 2 }}', sourceUrl: '../test.ts'});
        expectMapping(
   mappings, {generated: 'i0.ɵɵelementEnd()', source: '</div>', sourceUrl: '../test.ts'});        // Update mode
     source: '{{ 1 + 2 }}',        });
      });      it('should create correct inline template source-mapping when the source contains escape sequences',
async ()   const mappings = await compileAndMap('<div class=\\"some-class\\">this     source: '<div class=\\"some-class\\">',  });  const attrsMapping =
mappings.fi});
    });            expectMapping(mappings, {
 generated: sourceUrl: '../dir/test.html'
        });
        expectMapping(mappings, {
 generated: 'i0.ɵɵtext( sourceUrl: '../dir/test.html'
        });
        expectMapping(   {generated: 'i0.ɵɵelementEnd()' generated: 'i0.ɵɵelementStart(2, "div")',
 source: '<div>',
 sourceUrl: '../dir/test.html'        expectMapping(   {generated: 'i0.ɵɵtext(3)', source: '{{ 1 + 2 }}', sourceUrl: '../dir/test.html'});
        {generated: 'i0.ɵɵelementEnd()', source: '</div>', sourceUrl: '../dir/test.html'});        // Update mode
        expectMapping(mappings, {
 generated: 'i0.ɵɵtextInterpolate(1 + 2)',
 source: '{{ 1 + 2 }}',
 sourceUrl:      });      it('should create correct mappings when templateUrl is in a different rootDir', async () => {
        const mappings = await compileAndMap(
   '<div>this is a test</div><div>{{ 1 + 2 }}</div>', 'extraRootDir/test.html');        / sourceUrl: '../extraRootDir/test.html'
        }); source: '</div>',
 sourceUrl: '../extraRootDir/test.html'
        }); generated: 'i0.ɵɵelementStart(2, "div")',
 source: '<div>',
 sou source:         }); generated: 'i0.ɵɵelementEnd()',
 source: '</div>',
 sourceUrl: '../extraRootDir/test.html' source: '{{ 1 + 2 }}',        });    ('template: `' + template.replace(/\`/g, '\\`') + '`');
      env.write('test.ts', `
        import {Component, Directive, Input, Output, EventEmitter, Pipe, NgModule} from '@angular/core';        @Directive({
 selector: '[ngModel],[attr],[ngModelChange]'
        } @Input() ngModel!: any;
 @Output() ngModelChange = new EventEmitter<any>();
 @Input() attr!: any;        export class PercentPipe {
 transform(v: any) {}
        }        @Component({
 selector: 'test-cmp',        })
     isInitial = false; items: any[] = [];
 greeting declarations: [TestCmp, AllDirective, PercentPipe],
        }    `);        env.write(templateUrl, template);      env.driveMain();    }     * This lays out the segment mappings in the console to make it easier to compare.
     */      mappings.forEach(map => {
          padValue(map.sourceUrl, 20, 0) + ' : ' + padValue(inspect(map.source), 100, 23) +
   ' : ' +       function padValue(value: string, max: number, start: number) { ' '.repeat(max + start)) :
' '.repeat(max - value.length);
        ret    }    function expectMapping(mappings: SegmentMapping[], expected: SegmentMapping): void {
      if (mappings.some(
     m => m.generated === expected.generated && m.source === expected.source &&
   m.sourceUrl === expe      }
      const matchingGenerated = mappings.filter(m => m.generated === expected.generated);
      const matchingSource = mappings.filter(m => m.source === expected.source);      const        prettyPrintMapping(expecte      if (matchingGenerated.length > 0) {
        message.push('');
        message.push('There are the following mappings that match the generated te      }        message.push('');
           }      fail(message.join('\n'));      return [
        '{',
        `  generated: ${JSON.stringify(mapping.generated)}`,
        `  source:    ${JSON.stringify(mapping.source)}`,
        `        ].j  });
});
