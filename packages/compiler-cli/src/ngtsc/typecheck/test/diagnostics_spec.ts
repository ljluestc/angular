/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */[`TestComponent.html(1, 11):      const messages = diagnose(        class TestComponent {
pers[ngForDeclaration()], [ngForDts()]);      expect(messages).toEqual([
        `TestComponent.html(1, 62): Argument of type 'number' is not assignable to parameter of type 'string'.`,
      ]      const messages = diagnose(
`<div *ngFor="let person of persons;">{{ render(person.namme) }}</div>`, `persons: any;render(input: string): string { return input; }
    `<div dir #el>{{ render(el) }}</div>value: number;
        }
         type: 'directive',
  name: 'Dir',
  selector: '[dir]',
  exportAs: [        `TestComponent.html(1, 24): Argument of type 'HTMLDivElement' is not assignable to parameter of type 'string'.`,
    render(input: string): string { retu[{
  type: 'directive',
  name:        `TestComponent.html(1, 31): Argument of type 'Dir' is not assignable to parameter of type 'string'.`,
      ]);
    });    it('infers TemplateRef<any> for ng-template references', () => {
      const m        `TestComponent.html(1, 30): Argument of type 'TemplateRef<any>' is not assignable to parameter of type 'string'.`,
            `TestComponent.html(1, 47):     });    it('interprets interpolation as strings', () => {
      const messages = diagnose(`<blockquote title="{{ person }}"></blockquote>`, `
      c        src: string;
        height: number;
      }        `TestComponent.html(1, 6): Can't bind to 'srcc' since it isn't a known property of 'img'.`,
      ]);        }
    `class TestComponent {}`);      expe               `TestComponent.html(2, 46): Property 'nestedInterpolation' does not exist on type 'TestComponent'.`,
      ]);
    });};
        }`,
[{type:      // The directive here is structured so that a type constructor is used, which results in each
      // inpu    name: string;
  }`,      c   getName: () => string;
 } | null;      expect(messages).toE        `TestComponent.html(1, 24): Property 'personn' does not exist on type 'TestComponent'. Did you mean 'person'?`,
      ]);      const messages = diagclass G}class TestComponent {
  person: {
    nam}`,
[{  in        `TestComponent.html(1, 14): Property 'personn' does not exist on type 'TestComponent'. Did you mean 'person'?`,
      ]);
    });    it('should retain literal types in object literals together if strictNullInputBindings is disabled',
       name: 'Dir',
selector: '[d } class TestComponent {}`,
   [{
type: '   }],name: s        render(input: string): number { return input; } // <-- type error here should not be reported
      }        test(value: -1 | 1): number { return value; }
      }`);      expect(messages).toE      ]);
    });    it('should supp  hasSuccess(): this is { success: boolean };
}`,
[ngIfDe   `<div dir (event)="handleEvent($event)"></div>`, `
import {EventEmitter} from '@angular/core';
class D}
class TestComponent {
  handleEv  [{type: 'directive', name: 'Dir', selector: '[dir]', outputs: {'out': 'event'}}]);        expect(messages).toEqual([
`Tes}`);        expect(messages).toEqual([
`TestComponent.html(1, 41): Argument of type 'AnimationEvent' is not assignable to parameter of type 'string'.`,
               const messages = diagnose(`<div (click)="handleEvent($event)"></div>`, `
import   out: any;
}
clasclass Test}`,  // that would be implicit if the handler function would not have an explicit return
        });
    });    describe('strict null checks', () => {
      iperson: {
  ad        export class TestComponent {
person:    street: string;
  };        }`);        expect(messages).toEqual([]);
      }  return 'hello ' + name;
}
        }`        const messages =    export class TestComponent {
 person };export class TestComponent {
  person: {
    fav       });      it('does not produce diagnostic for safe calls', () => {
        const messages =
  diagn person: {
   getName?: () => string;
 };      });      it('infers a safe call return value as undefined', () => {export class TestComponent {
  pe        });    it('computes line and column offsets', () => {
      const messages = diagnose(
`</div>
`,class        }
        class TestComponent {
a: numb[{  exportA}]);      expect(messages).toEqual(
[`TestComp      const messages = diagnose(
`<di`
cl[{
  type:  selector: '[dir]',
  expor}]);      expect(messages).toEqual(
[`TestComponent.html(3, 30): Type 'HTMLElement' is not assignable to type 'string'.`]);
    });    it('allows access to protected members', () => {
            `TestComponent.html(1, 30): Property 'message' is private and only accessible within class 'TestComponent'.`
      ]  });  describe('method call spans', () => {
    it('re        expo  getName(): string;
};       getName(): string;
};
        }`person?: {};
             ]);    });
  });  describe('property write spans', () => {
    it( person: {};
        }`);      expect(messages).toEqual(
[`TestC  });  // https://github.com/angular/angular/issues/44999
  it('should not fail for components outside of rootDir', () => {
    // Thi        d  });  describe('host directives', () => {      const messages = diagnose(
`<div d  }    in  }
  cl    };
  }`  type:  selector: '[dir]',
  hostDirectives: [{
    dir inputs: {input: 'input', otherInput: 'otherInput'},
 isStandal    });    it('should produce a diagnostic for directive outputs', () => {
           stringEvent = new EventEmitter<string>();
    numberEvent = new EventEmitter<number>();
  }
  class  class TestComponent {[{  na  hostDirectives: [{
    direct isStandalone: true,
 outputs: {stringEvent: 'stringEvent', numberEvent: 'numberEvent'},
    },
   }]);      expect(messages).toEqual([
         () => {
sages =  class Dir {
  }
  class HostDir {
      }
  class TestComponent {
    per    };
    }]
   }]); // t `TestComponent.html(1, 10): Can't bind to 'input' since it isn't a known property of 'div'.`       });    it('should infer the type of host directive references', () => {
      cons  class Dir     value: number;
  }[{   isStandalone: true,
 name: 'HostDir',
 exportAs:`<div dir></div>`, `
  class Dir {
    input: any;
  }`,  type: 'directive',        `TestComponent.html(1, 1): Required input 'input' from directive Dir must be specified.`
           const messages = diagnose(
`<div dir otherDir></div>`, `  }
  class  {    name: 'Dir',
  input: {   bindingPropertyName: 'input',
   required: },
 otherI   bi   transform: null,
 }
    }
  },    type: 'directive',
    name:   cl   required: true, }
    },
  }
]);          });    it('should report the public name of a missing required input', () => {
      }
  cl[{  name: 'Dir',
  selector: '[dir]',
  input required: true,
 transform: null,  }
}]);      class Dir {
    inp  class TestComponent {
    f      input: {
 classPropertyName: 'input',
 bindingPropertyName: 'input',
 required: true,
 transform: null,
    },       ()   `   input: any;
 }    `,
   [{
type: 'directive',
naminpu    classPropertyName: 'input',
         });    it('should not produce a diagnostic if a required input is used in a static binding', () => {
      c  class Dir {
    input: any;
  }
  cl[{
  type: 'directive',
  name:  inputs: {
    input: { bindingPropertyName: 'input',
 req  }
`,
[{  nam  inp classPropertyName: 'input', required:    },
  },}]);      ex       () => {
sages = `,type: 'directive',
name: 'Dir',inputs: {
  dir: {
    classPropertyName: 'dir',
    bindin[{
  type: 'directive',
  name: 'Dir',
  selec name: 'HostDir',
 select },      }]
}]);      expect(messages).toEqual([
     sages = diagnose(
   `<div [attr.maxlength]="123"></ class TestComponent {}
    `,  maxle    bindingPropertyName: 'maxlength',
   },   }]);ssages).toEqual([]);
       });  describe('template parse failures', () => {
    afterEach(resetParseTemplateAsSourceFileForTest);    it('baseline test without parse failure', () => {
      const messages = diagnose(`<div (click)="test(name)"></div>`, `
             test(n: string): void {}
      }`);      expect(messages).toEqual([
        `TestComponent.html(1, 20): Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type '    });    it('should handle TypeScript parse failures gracefully', () => {
      set           }`);      expect(messages.length).toBe(1);.toContain(
    `main.ts(2, 20): Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
  F            e        test(n: string): void {}
      Type 'undefined' is not assignable to type 'string'.
  Fa    });});function diagnose(
    template: string, source: string, declarations?: TestDeclaration[],
    add      [
        {
fileName: sfPath,
templates: {
  'T          ],
      {  const diagnostics = templateTypeChecker.getDiagnosticsForFile(sf, OptimizeFor.WholeProgram);
  ret}
