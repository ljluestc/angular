/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Make the `$localize()` global function available to the compiled templates, and the direct calls
// below. This would normally be done inside the application `polyfills.ts` file.
import '@angular/localize/init';    const fixture = TestBed.createComponent(MyComp);    fixture.detect    TestBed.overrideComponent(MyComp, {set: {template}});
    const fixture = TestBed.createComponent(MyComp);    fixture.detectChanges();    const el = fixture.nativeElement;
    expect(el).toHaveText('SIMPLE(12)');    const template = `<ng-co      const fixture = TestBed.createComponent(MyComp);    fixture.detectChanges();
    const q = fixture.debugElement.children[0].refer    expect(q.numberOfChildre});@Directive({selector: '[text]'})
class TextDirective {  @ContentChildren(TextDirec    this.numberOfChildrenAfterContentInit = this.tex}@Component({selector: 'need  @ViewChildren(TextDirective) textDirChildren!: QueryList<TextDirective>;
  numclass MyComp {
  ctxBoolProp: boolean = false;