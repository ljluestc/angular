/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    c    expect(block).toCon  });    c      name: 'DirA',
         expect(tcb(TEMPLATE)).toContain('var _t2 = _t1.$implicit;');
  });    expect(tcb(TEMPLATE)).toContain('var _t2 = _t1.$implicit;');
    e  });  it('should handle direct calls of an       const TEMPLATE = `<div dir [inputA]="foo"></div>`;
          'inputB',
         });    it('should handle multiple bindings to the same property', () => {
             selector: '[dir]',
              });    it('should only apply property bindings to directives', () => {
             selector: '[dir]',
        inputs: {'color': 'color', 'strong': 'strong', 'enabled': 'enabled'},
                const TEMPLATE = `
           const DIRECTIVES: TestDirective[] = [{
             inputs: {input: 'input'},
             expect(actual).toContain(
ctor1ut = (_t1);');
    }     irA',
: '[dir-a]',
: ['dc: tr        {
irective',
irB',
: '[d     ctor1: <T extends string = any>(init: Pick<i0.DirA<T>, "inputA">) => i0.DirA<T> = null!; const _ctor2: <T extends string = any>(init: Pick<i0.DirB<T>, "inputB">) => i0.DirB<T> = null!;');
      expect(actual).toContain(
 = _ctor1({ "inputA": (null!) }); ' +
 = _t4; ' +
 = _c    });    it('should handle empty bindings', () => {
      c        selector: '[dir-a]',
           }];
      expect(tcb(TEMPLATE, DIRECTIVES)).toContain('"inputA": (undefined)');
    });    it('should handle bindings without value', () => {
                const TEMPLATE = `<div dir [inputA]="foo"></div>`;
      const DIRECTIVES: TestDeclaration[] = [{
        type: 'directive',
        name: 'Dir',
     'inputA',
        },
        isGeneric: true,
           expect(tcb(TEMPLATE, DIRECTIVES))
in(
 _t1:    const TEMPLATE = `
      <div></div>
      <button #me (click)="handle(me)"></button>
    `;
    const block = tcb(TEMPLATE);
    e        'var _t2 = document.createElement("button"); ' +
         });  it('should only generate directive declarations that have bindings or are referenced', () => {
    con        hasReference #ref="ref"
         `;
    const DIRECTIVES: TestDeclaration[] = [
      {        name: 'HasInput',
             selector: '[hasOutput]',
        outputs: {output: 'output'},
             selector: '[hasReference]',
        exportAs: ['ref'],
      },
      {
             selector: '[noReference]',
        exportAs: ['no-ref'],
      },
             name: 'NoBindings',
        selector: '[noBindings]',
        inputs: {unset: 'unset'},
      }    c    expect(block).toContain('_t1.input = (((this).value));');
    expect(block).toContain('var _t2: i0.HasOutput = null!');
    expect(block).toContain('_t2["output"]');
    expect(block).toContain('var _t4: i0.HasReference = null!');
    expect(block).toContain('var _t3 = _t4;');
    expect(block).toContain('(_t3).a');
    e  });  it('should generate a forward element reference correctly', () => {
    con         expect(tcb(TEMPLATE))
             {{d.value}}
         const DIRECTIVES: TestDeclaration[] = [{
      type: 'directive',
      n      exportAs: ['dir'],
    }];        .toContain(
t2: i(((_t1).value));');
  });  it('should handle style and class bindings specially', () => {
    const TEMPLATE = `
         expect(block).not.toContain('.class = ');
    expect(block).not.toContain('.style = ');
  });  it('should only apply property bindings to directives', () => {
    const TEMPLATE = `
         const DIRECTIVES: TestDeclaration[] = [{
      type: 'directive',
      name: 'Dir',
      selector: '[dir]',
      inputs: {'color': 'color', 'strong': 'strong', 'enabled': 'enabled'},
    }];
    const block = tcb(TEMPLATE, DIRECTIVES);
    expect(block).not.toContain('var _t1: Dir = null!;');
    exp    e  });  it('should generate a circular directive reference correctly', () => {
    const TEMPLATE = `
      <div dir #d="dir" [input]="d"></div>
    `;
    const DIRECTIVES: TestDirective[] = [{
      type: 'directive',
      name: 'Dir',
      selector: '[dir]',
         }];
    expt2: input = (_t1);');
  });        {
        type: 'directive',
        name: 'DirA',
        selector: '[dir-a]',
        exportAs: ['dirA'],
             {
               selector: '[dir-b]',
        exportAs: ['dirB'],
        inputs: {inputA: 'inputB'},
      }
    ]        .toContain(
t2: i0.DirB = null!; ' +
t1 = _t2; ' +
t3: i0.t4 = _t3; ' +  });  it('should handle undeclared properties', () => {
    const TEMPLATE = `<div dir [inputA]="foo"></div>`;
    const DIRECTIVES: TestDeclaration[] = [{
           selector: '[dir]',
      inputs: {
        fieldA: 'inputA',
      },
      undeclaredInputFields: ['fieldA']
    }];
    const block = tcb(TEMPLATE, DIRECTIVES);
    expect(block).not.toContain('var _t1: Dir = null!;');
    expect(block).toContain('(((this).foo)); ');
  });  it('should assign restricted properties to temp variables by default', () => {
    const TEMPLATE = `<div dir [inputA]="foo"></div>`;
    const DIRECTIVES: TestDeclaration[] = [{
      t                restrictedInputFields: ['fieldA']
    }];
    expect(tcb(TEMPLATE, DIRECTIVES))
        .toContain(
t1: i0.Dir = null!; ' +
t2: (typeof _t1)["fieldA"] = null!; ' +
 (((this).foo)); ');
  });  it('should assign properties via element access for field names that are not JS identifiers',
            const DIRECTIVES: TestDeclaration[] = [{
rective '[di       const block = tcb(TEMPLATE, DIRECTIVES);
     ome-input.xs"] = (((this).foo)); ');
     });       name: 'Dir',
      selector: '[dir]',
      inputs: {
        field1: 'inputA',
        field2: 'inputA',
      },
    }];        .toContain(
t1: i0.  });  it('should handle a single property bound to multiple fields, where one of them is coerced',
     () => {
       const TEMPLATE = `<div dir [inputA]="foo"></div>`;
       const DIRECTIVES: TestDeclaration[] = [{
recti '[dir]', 'inputA',
 'inputA',putFields: ['field1'],
       }];
       'var _t1: typeof i0.Dir.ngAcceptInputType_field1 = null'_t2.     () => {
       const TEMPLATE = `<div dir [inputA]="foo"></div>`;
       const DIRECTIVES: TestDeclaration[] = [{
recti '[dir]', 'inputA',
 'inputA',dInputFields: ['field1'],
       }];
       expect(tcb(TEMPLATE, DIRECTIVES))
ain(
'var _t1: i0.Dir = null!; ' +
'_t1.field2 = (((this).foo));');
     });  it('should use coercion types if declared', () => {
    const TEMPLATE = `<div dir [inputA]="foo"></div>`;
    c      name: 'Dir',
      selector: '[dir]',
      inputs: {
        fieldA: 'inputA',
      },
         c    expect(block).toContain(
        'var _t1: typeof i0.Dir.ngAcceptInputType_fieldA = null!; ' +
        '_t1 = (((this).foo));');
  });  it('should use coercion types if declared, even when backing field is not declared', () => {
    const TEMPLATE = `<div dir [inputA]="foo"></div>`;
    const DIRECTIVES: TestDeclaration[] = [{
      type: 'directive',
           inputs: {
           coercedInputFields: ['fieldA'],
      u    c    const TEMPLATE = `<div dir [fieldA]="expr"></div>`;
    c      name: 'Dir',
      se        fieldA: {
roper: false,
m: {
ts.factory.createFunctionDeclaration(
 undefined, undefined, undefined, undefined, [], undefined, undefined),
ts.factory.createUnionTypeNode([
actory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
actory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),        },
      }    }];    const block = tcb(TEMPLATE, DIRECTIVES);    expect(block).toContain(
        'var _t1: boolean | string = null!; ' +
        '_t1 = (((this).expr));');
  });    const block = tcb(TEMPLATE);
    expect(block).toContain('(((this).a) as any)');
  });  it('should handle $any accessed through `this`', () => {
    const TEMPLATE = `{{this.$any(a)}}`;
    c  });  it    const block = tcb(TEMPLATE);
    expect    it('should translate unclaimed bindings to their property equivalent', () => {
      const TEMPLATE = `<label [for]="'test'"></label>`;
      cin('_t1["htmlFor"] = ("test");');  });        name: 'NgIf',
        selector: '[ngIf]',
        inputs: {'ngIf': 'ngIf'},
     nvocation      }];
      cons      expect(block).toContain('if (i0.NgIf.ngTemplateGuard_ngIf(_t1, ((this).person)))');
    });    it('should emit binding guards', () => {
      const DIRECTIVES: TestDeclaration[] = [{
        type: 'directive',
        name: 'NgIf',
        selector: '[ngIf]',
        e: 'ngIf',
inding',
           const TEMPLATE = `<div *ngIf="person !== null">{{person.name}}</div>`;
      const block = tcb(TEMPLATE, DIRECTIVES);
      expect(block).toContain('if ((((this).person)) !== (null))');
    });    it('should not emit guards when the child scope is empty', () => {
      const DIRECTIVES: TestDeclaration[] = [{
                  ngTemplateGuards: [{
e: 'ngIf',
nvocation',
           const TEMPLATE = `<div *ngIf="person">static</div>`;
      const block = tcb(TEMPLATE, DIRECTIVES);
      expect(block).not.toContain('NgIf.ngTemplateGuard_ngIf');
    });
  });      const DIRECTIVES: TestDeclaration[] = [{
             selector: '[dir]',
        outputs: {'outputField': 'dirOutput'},
      }];
         });    it('should emit addEventListener calls for unclaimed outputs', () => {
           expect(block).toContain(
EventLis      const TEMPLATE = `<div (event)="foo($any($event))"></div>`;
     EventListener("event", ($event): any => { (this).foo(($event as any)); });');
    });    it('should detect writes to template variables', () => {
      const TEMPLATE = `<ng-template let-v><div (event)="v = 3"></div></ng-template>`;
      const block = tcb(TEMPLATE);
      expect(block).toContain('_t3.addEventListener("event", ($event): any => { (_t2 = 3); });');
    });    it('should ignore accesses to $event through `this`', () => {
      const TEMPLATE = `<div (event)="foo(this.$event)"></div>`;
      const block = tcb(TEMPLATE);      expect(block).toContain(
EventListener("event", ($event): any => { (this).foo(((this).$event)); });');
    });    const DIRECTIVES: TestDeclaration[] = [{      name: 'Dir',
      selector: '[dir]',
      exportAs: ['dir'],
         const BASE_CONFIG: TypeCheckingConfig = {
      applyTemplateContextGuards: true,
           alwaysCheckSchemaInTemplateBodies: true,
      checkTypeOfInputBindings: true,
                    checkTypeOfDomEvents: true,
      chec      useContextGenericType: true,
      strictLiteralTypes: true,
      enableTemplateTypeChecker: false,
      useInlineTypeConstructors: true,
      suggestionsForSuboptimalTypeInference: false,             const DISABLED_CONFIG:
eckingConfig = {...BASE_CONFIG, applyTemplateContextGuards: false};
        const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
         });          const block = tcb(TEMPLATE, DIRECTIVES);
        ex      it('should not descend into template bodies when disabled', () => {
               expect(block).not.toContain('((this).a)');
      });      it('generates a references var when enabled', () => {
        const block = tcb(TEMPLATE, DIRECTIVES);
        expect(block).toContain('var _t1 = (_t2 as any as i1.TemplateRef<any>);');
      });      it('generates a reference var when disabled', () => {
                expect(block).toContain('var _t1 = (_t2 as any as i1.TemplateRef<any>);');
      });
    }        const block = tcb(TEMPLATE, DIRECTIVES);
        expect(block).toContain('_t1.dirInput = (((this).a));');
        expect(block).toContain('((this).b);');
      }        const DISABLED_CONFIG:
eckingConfig = {...BASE_CONFIG, strictNullInputBindings: false};
        const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
        expect(block).toContain('_t1.dirInput = (((this).a)!);');
         });    describe('config.checkTypeOfBindings', () => {
      it('should check types of bindings when enabled', () => {
        const TEMPLATE = `<div dir [dirInput]="a" [nonDirInput]="b"></div>`;
             expect(block).toContain('((this).b);');
      });      it('should not check types of bindings when disabled', () => {
        const TEMPLATE = `<div dir [dirInput]="a" [nonDirInput]="b"></div>`;
        const DISABLED_CONFIG:
eckin      });      it('should wrap the cast to any in parentheses when required', () => {
     eckingConfig = {...BASE_CONFIG, checkTypeOfInputBindings: false};
        const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
        expect(block).toContain('_t1.dirInput = ((((((this).a)) === (((this).b))) as any));');
      });      const TEMPLAT               expect(block).toContain(
ddEve      it('should not check types of directive outputs when disabled', () => {
               const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
             expect(block).toContain(
entListe        const block = tcb(TEMPLATE, DIRECTIVES);
           it('should not check types of animation events when disabled', () => {
               const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
        expect(block).toContain('($event: any): any => { (this).foo($event); }');
      });
    });    describe('config.checkTypeOfDomEvents', () => {
      c        expect(block).toContain(
outputField"].subscribe(($event): any => { (this).foo($event); });');
        expect(block).toContain(      });
      it('should not check types of DOM events when disabled', () => {
               expect(block).toContain(        expect(block).toContain('($event: any): any => { (this).foo($event); }');
      });
    });    describe('config.checkTypeOfDomReferences', () => {
             const DISABLED_CONFIG:
eckingConfig = {...BASE_CONFIG, checkTypeOfDomReferences: false};
     t1 = _t2 as any; ' +
(((_t1).value));');
                      exportAs: ['dir'],
        in      const TEMPLATE =
r #ref="dir">{{ref.value}}</div><ng-template #ref2></ng-template>{{ref2.value2}}`;      it('should trace references to a directive when enabled', () => {
        const block = tcb(TEMPLATE, DIRECTIVES);
        expect(block).toContain('(_t1).value');
      });      it('should trace references to an <ng-te(((_t      });
    });    describe('config.checkTypeOfAttributes', () => {
      const TEMPLATE = `<textarea dir disabled cols="3" [rows]="2">{{ref.value}}</textarea>`;
                      expect(block).toContain('_t1.cols = ("3");');
        ex        const DISABLED_CONFIG: TypeCheckingConfig = {...BASE_CONFIG, checkTypeOfAttributes: false};
               expect(block).not.toContain('"cols"');
        e    });    describe('config.checkTypeOfPipes', () => {
      const TEMPLATE = `{{a | test:b:c}}`;
      const PIPES: TestDeclaration[] = [{
        t        pipeName: 'test',
      }]        expect(block).toContain('var _pipe1: i0.TestPipe = null!;');
        expect(block).toContain('(_pipe1.transform(((this).a), ((this).b), ((this).c)));');
           });
    });    describe('config.strictSafeNavigationTypes', () => {
      const TEMPLATE = `{{a?.b}} {{a?.method()}} {{a?.[0]}} {{a.optionalMethod?.()}}`;      it('should use undefined for safe navigation operations when enabled', () => {
        as any ? (null as any ? (((this).a))!.method : undefined)!() : undefined)');
        expect(block).toContain('(null as any ? (((this).a))!.b : undefined)');
        expect(block).toContain('(null as any ? (((this).a))![0] : undefined)');
        expect(block).toContain('(null as any ? (((((this).a)).optionalMethod))!() : undefined)');
                    const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
        expect(block).toContain('((((((this).a))!.method as any) as any)())');
        expect(block).toContain('((((this).a))!.b as any)');
           });
    });  hod()?.b}} {{a()?.method()}} {{a.method()?.[0]}} {{a.method()?.otherMethod?.()}}`;
      it('should check the presence of a property/method on the receiver when enabled', () => {
        const block = tcb(TEMPLATE, DIRECTIVES);
             e      });
      it('should not check the presence of a property/method on the receiver when disabled', () => {
        const DISABLED_CONFIG:
eckingConfig = {...BASE_CONFIG, strictSafeNavigationTypes: false};
        const block = tcb(TEMPLATE, DIRECTIVES, DISABLED_CONFIG);
        expect(block).toContain('(((((this).a)).method()) as any).b');
        e    });    describe      }        const block = tcb(TEMPLATE, undefined, DISABLED_CONFIG);
         });    describe('config.checkAccessModifiersForInputBindings', () => {
      c 'Dir',
tor: 'some-input.xs': 'inputA',ictedInputFields: ['some-input.xs'],
gLiteralir',
: '[dir]',
{
: 'inputA',edInputFields: ['fieldA']
       eckingConfig = {...BASE_CONFIG, honorAccessModifiersForInputBindings: true};
        const block = tcb(TEMPLATE, DIRECTIVES, enableChecks);
        expect(block).toContain(
t1: i0.      });
    });       const template = `
    <div dir
      [inputA]='foo'      ></div>
    `;
       r', 'inputB',: true
       }];       const renderedTcb = tcb(template, declarations, {useInlineTypeConstructors: false});       expect(renderedTcb).toContain(`var _t1: i0.Dir<any, any> = null!;`);
            });  describe('host directives', () => {
    i'directive',
'HostDir',
or: 's: {hostOutput: 'hostOutput'},
dalone: true,['hostInput'],
 ['hostOutput']
             const block = tcb(TEMPLATE, DIRECTIVES);
               const TEMPLATE = `<div dir-a [inputAlias]="1" (outputAlias)="handle($event)"></div>`;
      cons        hostDirectives: [{
e: {'HostDir',
or: '',
: {hostInput: 'hostInput'},
s: {hostO ['hostOutput: outputAlias']
            const block = tcb(TEMPLATE, DIRECTIVES);
     e: {
'director: '',
dalone: true,
rectives: [{
ctive: {
 type:  s      expect(block).toContain('_t1.multiLevelHostInput = (1)');
    });           name: 'DirA',
       : 'directive',
: 'HostA'andalon: 'directive',
: 'HostB',
ctor: '',
andalone:      }];
      co    });    it('should generate bindings to the same input both from the host and host input', () => {
      const TEMPLATE = `<div dir-a [input]="1"></div>`;
     e: {
'director: '',
: {input: 'input'},        }]
      }      expect(block).toContain('var _t1: i0.HostDir = null!');
      expect(block).toContain('var _t2: i0.DirA = null!;');
      expect(block).toContain('_t1.input = (1)');
      expect(block).toContain('_t2.input = (1)');
    });    it('should not generate bindings to host directive inputs/outputs that have not been exposed',
       () => {
PLATE =directive',
DirA',
r: '[dir-a]',
ectivtype: 'directive',
name: 'inisStandalone: true,tentionally left blank.
s: [],
ts: []ck = tcb(TEMPLATE, DIRECTIVES);
ock).       })PLATE = `<div dir-a [inputAlias]="1" (outputAlias)="handle($event)"></div>`;
ECTIVES: TestDeclaration[] = [{
directive',
DirA',
r: '[dir-a]',
ectives: [{
tive: {inputs:isStandalone  });  , undefined, undefined, undefined, {enabledBlockTypes: new Set(['defer'])});
    }       older}{{placeholder()}}
g}{{loa    });    it('should generate `when` trigger', () => {
      const TEMPLATE = `
        {#defer when shouldShow() && isVisible}{{main()}}{/defer}
      `;      expect(defer      const TEMPLATE = `
            }    it('should generate bindings inside if block', () => {
      const TEMPLATE = `
        {#if expr}
}}f expr2}{{two()}}
{other(      `;      expect(conditionalTcb(TEMPLATE))
in(
+ ((this).main()); "" + ((this).one()); "" + ((this).two()); "" + ((this).other());');
    });        {#switch expr}
}{{one(    });
  });  // TODO(crisbeto): tests for the for loop expression and context variables
  describe('for loop blocks', () =    function loopTcb(template: string): string {
      return tcb(template, undefined, undefined, undefined, {enabledBlockTypes: new Set(['for'])});
    }        `;      expect(loopTcb(TEMPLATE)).toCo