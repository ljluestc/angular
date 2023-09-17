/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  <msg id="90385050694738525     <msg id="7254052530614200029" desc="wi    }}<`;const EXPECTED_XLIFF = `<?xml version="1.0" encoding="UTF-8" ?>  <      <        <context-group purpose="location">
 context-type="sourcefile">src/ba contex        </context-group>
        <note priority="1" f           <context-group purpose="location contex c        <context-group purpose="location"> co        context-type="linenumber">3</context>
        </context-group>      <tr             <trans-unit id="540c5f481129419ef21017f396b6c2d0869ca4d2" datatype="html">
        <source>
     fo        <context-group purpose="location">
 co        </context-group>
        <note priority="1" from="description">with ICU and other things</note>
      < c        </context-group>
      </trans-unit>
         n        <context-group purpose="location">
 context-type="sourcefile">src/placehol        </context-group>      </trans-unit>
    </body></xliff>
`;const  <file original="ng.template" id="ngi18n">
    <unit id="8136548302122759730">
      <        <note category="meaning">meaning</note>
           <note category="location">src/basic.html:1</note>
      </notes>
      <          <note category="location">src/basic.html:3,4</note>
        <note category="location">src/comp2.ts:3,4</note>
        <note category="location">src/comp2.ts:2,3</note>
        <note category="location">src/basic.html:3,4</note>
      <        <source>
    Welcome</source>    </unit>      <notes>
        <note category="descriptio        <note category="location">src/icu.html:5</note>
           </unit>
    <unit id="5811701742971715242">
      <notes>
        <note category="description">with ICU and other things</note>
        <note category="location">src/icu.html:4,6</note>
           <source>
     foo <ph id="0" equiv="ICU" disp="{ count, plural, =1 {...} other {...}}"/>
    </source>
      </segment>    <unit id="7254052530614200029">
          <note category="location">src/placeholders.html:1,3</note>
      </notes>
      <segment>
        <source>Name: <pc id="0" equivStart="START_BOLD_TEXT" equivEnd="CLOSE_BOLD_TEXT" type="fmt" dispStart="&lt;b&gt;" dispEnd="&lt;/b&gt;"><ph id="1" equiv="NAME" disp="{{
      name // i18n(ph=&quot;name&quot;)
    }}"/></pc></source>
      </segment>
    </unit></xliff> * Note: the indentation here is load-bearing.
 */  const welcomeMessage = `
      `;
  env.write('src/basic.html', `<div title="translate me" i18n-title="meaning|desc"></div>
lcomeMessage">${welcomeMessage}</p>`);  env.write('src/comp1.ts', `
    import {Component} from '@angular/core';    @Component({
      selector: 'basic',
      templateUrl: './basic.html',
    })
    export class BasicCmp1 {}`);  env.write('src/comp2.ts', `
    import {Component} from '@angular/core';    @Component({
      selector: 'basic2',
      template: \`<div title="translate me" i18n-title="meaning|desc"></div>
      <p id="welcomeMessage">${welcomeMessage}</p>\`,
    })
    export class BasicCmp2 {}
    @Component({
      })
    export class BasicCmp4 {}`);  env.write('src/comp3.ts', `
    import {Component} from '@angular/core';    @Component({
      selector: 'basic3',
      templateUrl: './basic.html',
    })
    export class BasicCmp3 {}`);  env.write('src/placeholders.html', `<div i18n="with placeholders">Name: <b>{{
      name // i18n(ph="name")
    }}</b></div>`);  env.write('src/placeholder_cmp.ts', `
    import {Component} from '@angular/core';    @Component({
      })
    export class PlaceholderCmp { name = 'whatever'; }`);  env.write('src/icu.html', `<div i18n="with ICU">{
      count, plural, =1 {book} other {books}
    }</div>
    <div i18n="with ICU and other things">
      import {Component} from '@angular/core';    @Component({
      selector: 'icu',
      templateUrl: './icu.html',    export class IcuCmp { count = 3; }`);  env.write('src/module.ts', `
    import {NgModule} from '@angular/core';    import {BasicCmp1} from './comp1';
    import {BasicCmp2, BasicCmp4} from './comp2';
    import {BasicCmp3} from './comp3';
    import {PlaceholderCmp} from './placeholder_cmp';
    import {IcuCmp} from './icu_        BasicCmp1,
        BasicCmp2,        BasicCmp4,
        PlaceholderCmp,
        IcuCmp,
      ],
      imports: [CommonModule],
    })
    export class I18nModule {}
    `);
}
