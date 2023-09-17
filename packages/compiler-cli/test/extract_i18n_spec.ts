/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ context-type="sourcefile">src/basic.html</context>
 context-type="linenumber">3< context-type="linenumber">3</context>      </trans-unit>        <source>{VAR_PLURAL, plural, =1 {book} other {books} }</source>
        <context-group purpose="location">
 context-type="sourcefile">src/icu.html</context>
 context-type="linenumber">1</context>        context-type="linenumber">4</context>
        </context-group>
        <note priority="1" from="description">with ICU and other things</note>
      </trans-unit>
      <trans-unit id="ca7678090fddd04441d63b1218177af65f23342d" datatype="html">
        <source>{VAR_PLURAL, plural, =1 {book} other {books} }</source>
        <context-group purpose="location">
 context-type="sourcefile">src/icu.html</context>
 context-type="linenumber">5</context>      </trans-unit>        <source>Name: <x id="START_BOLD_TEXT" ctype="x-b" equiv-text="&lt;b&gt;"/><x id="NAME" equiv-text="{{
      name // i18n(ph=&quot;name&q   context-type="linenumber">1</context>
        </context-group>
        <note priority="1" from="description">with placeholders</note>
      </trans-unit>
    </body>
  </file>
</xliff>
`;const EXPECTED_XLIFF2 = `<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en">
  <file original="ng.template" id="ngi18n">
    <unit id="8136548302122759730">
      <notes>
        <note category="description">desc</note>
        <note category="meaning">meaning</note>
        <note category="location">src/basic.html:1</note>
        <note category="location">src/comp2.ts:1</note>
        <segment>
        <source>translate me</source>
      </segment>
    </unit>
    <unit id="9038505069473852515">
      <notes>
        <note category="location">src/basic.html:3,4</note>
          <note category="location">src/basic.html:3,4</note>
      </notes>
      <segment>
        <source>
    Welcome</source>
      </segment>
    </unit>
    <unit id="5611534349548281834">
      <notes>
        <note category="description">with ICU</note>
        <note category="location">src/icu.html:1,3</note>
        <note category="location">src/icu.html:5</note>
      </notes>
      <segment>
        <source>{VAR_PLURAL, plural, =1 {book} other {books} }</source>
      </segment>
    </unit>
    <unit id="5811701742971715242">
          <note category="location">src/icu.html:4,6</note>
      </notes>
      <segment>
        <source>
     foo <ph id="0" equiv="ICU" disp="{ count, plural, =1 {...} other {...}}"/>
    </source>
      </segment>
    </unit>
    <unit id="7254052530614200029">
      <notes>
        <note category="description">with placeholders</note>
        <note category="location">src/placeholders.html:1,3</note>
      </notes>
      <segment>
        <source>Name: <pc id="0" equivStart="START_BOLD_TEXT" equivEnd="CLOSE_BOLD_TEXT" type="fmt" dispStart="&lt;b&gt;" dispEnd="&lt;/b&gt;"><ph id="1" equiv="NAME" disp="{{
      name // i18n(ph=&quot;name&quot;)
    }}"/></pc></source>
      </segment>
  </xliff>
`;describe('extract_i18n command line', () => {
  let basePath: string;
  let outDir: string;
  let write: (fileName: string, content: string) => void;
  let errorSpy: jasmine.Spy&((s: string) => void);  function writeConfig(tsconfig = '{"extends": "./tsconfig-base.json"}') {
    write('tsconfig.json', tsconfig);
  }  beforeEach(() => {
    errorSpy = jasmine.createSpy('consoleError').and.callFake(console.error);
    const support = setup();
    write = (fileName: string, content: string) => {
      support.write(fileName, content);
    };
    basePath = support.basePath;
    outDir = path.join(basePath, 'built');
    write('tsconfig-base.json', `{
      "compilerOptions": {
        "experimentalDecorators": true,
          "types": [],
          "baseUrl": ".",
        "declaration": true,
        "target": "es2015",
        "module": "es2015",
        "moduleResolution": "node",        "typeRoots": ["node_modules/@types"]
      }
       const welcomeMessage = `
    <!--i18n-->
    Welcome<!--/i18n-->
    `;
    write('src/basic.html', `<div title="translate me" i18n-title="meaning|desc"></div>
lcomeMessage">${welcomeMessage}</p>`);    write('src/comp1.ts', `
    import {Component} from '@angular/core';    @Component({
      selector: 'basic',
      templateUrl: './basic.html',
    })
    export class BasicCmp1 {}`);    write('src/comp2.ts', `
        template: \`<div title="translate me" i18n-title="meaning|desc"></div>
      export class BasicCmp2 {}
    @Component({
      selector: 'basic4',
      template: \`<p id="welcomeMessage">${welcomeMessage}</p>\`,
    })    import {Component} from '@angular/core';    @Component({
      selector: 'basic3',
       }}</b></div>`);    write('src/placeholder_cmp.ts', `
    import {Component} from '@angular/core';    @Component({
      selector: 'placeholders',
      templateUrl: './placeholders.html',
    })
    export class PlaceholderCmp { name    }</div>
    <div i18n="with ICU and other things">    </div>`);    write('src/icu_cmp.ts', `
    import {Component} from '@angular/core';    @Component({
      selector: 'icu',
      templateUrl: './icu.html',
    })    import {NgModule} from '@angular/core';
    import {CommonModule} from '@angular/com    import {BasicCmp2, BasicCmp4} from './comp2';
    import {BasicCmp3} from './comp3';
    import {PlaceholderCmp} from './placeholder_cmp';
          BasicCmp1,
        BasicCmp2,
        BasicCmp3,
        BasicCmp4,
        PlaceholderCmp,    })    `);
  }  it('should extract xmb', () => {
       const xmb = fs.  });  it('should extract xlf', () => {
    writeConfig();    expect(errorSpy).not.toHaveBeenCalled();
    expect(exitCode).toBe(0);    const xlfOutput = path.join(outDir, 'messages.xlf');
    expect(fs.existsSync(xlfOutput)).toBeTruthy();
    const xlf = fs.readFileSync(xlfOutput, {encoding: 'utf-8'});
    expect(xlf).toEqual(EXPECTED_XLIFF        mainXi18n(['-p', basePath, '--i18nFormat=xlf2', '--outFile=messages.xliff2.xlf'], errorSpy);
    expect(errorSpy).not.toHaveBeenCalled();    expect(fs    expect(xlf).toEqual(EXPECTED_XLIFF2);
  });  it('should not emit js', () => {    writeSources();    const exitCode =
        mainXi18n(['-p', basePath, '--i18nFormat=xlf2', '--outFile=messages.xliff2.xlf'], errorSpy);
    expect(errorSpy).not.toHaveBeenCalled();
    expect(exitCode).toBe(0);   