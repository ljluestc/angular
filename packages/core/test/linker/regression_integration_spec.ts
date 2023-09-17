/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  });  describe('expressions', () => {
    it('should evaluate conditional and boolean operators with right p      const template = `{{!null?.length}}`;
           expect(fixture.nativeElement).toHaveText('true');
    });    it('should only evaluate stateful pipes once - #10639', () omp {
p = Pset a(v: number) {
  this.@Input()      const template = '{{method()?.value}}';
           @Component({selector: 'some-comp', template: '<p (click)="nullValue?.click()"></p>'})
      c      }      class SomeReferencedClass {
           c      const injector = createInjector([{provide: token, useValue: tokenValue}]);      expect(injector.get(token)).toEqual(tokenValue);
    });    it('should support providers with an InjectionToken that has a StringMap as value', () => {
           }
      c      e  });  it('should allow logging a previous elements class binding via interpolation', () => {
    const template = `<div [class.a]="true" #el>Class: {{el.className}}</div>`;
    Tes    expect(fixture.nativeElement).toHaveText('Cl      return MyComponent;
    }      @Component({template: '<div [someDir]="someRef"></div><ng-template #someRef>    }    @Directive({selector: '[someDir]'})
    cla    }    const ctx =
         ctx.detectChanges();
    exp    con  });      @Component({template: ''})
      class MyComp {
      }  });  it('should throw if @ContentChild and @Input are on the same property', () => {
       TestBed.configureTestingModule({declarations: [        }  let logger: MockConsole;    d    doc.body.appendChild(el);    logger = new MockConsole();
    errorHandler = new ErrorHandler();
    (er        }             onClick(event: any) {
this.di             declarations: [ErrorComp, EventDir],
        bootstrap: [ErrorComp],
        providers: [{provide: ErrorHandler, useValue: e             assertValueAndErrors               currentErrorIndex +=         done();
      });      function assertValueAndErrors(compEl: any, value: number, errorIndex: number) {
           });  }cl}@Pipe({name: 'somePipe', pure: true})
class PlatformPipe implements PipeTransform {
  trans}@Com}@Component({selector: 'counting-cmp', template: ''})
c  transform(value: any): any {    r  static reset() {
    CountingPipe.calls = 0;})
expor