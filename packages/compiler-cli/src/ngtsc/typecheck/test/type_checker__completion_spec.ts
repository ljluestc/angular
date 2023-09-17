/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  <div #notInScope></div>
</div>        <div #topLevel      const members = `users: string[];`;      const {completions} = setupCompletions(template, members, 0);
      expect(new Set(completions.templateContext.keys())).toEqual(new Set([
           });    it('should support shadowing between outer and inner templates  ', () => {
      const template = `
        <div *ngFor="let user of users">        </div>
        <div #user>Out here, 'user' is the reference.</div>
      `      /      // Completions within the embedded view at index 0.
      const {completions: inNgFor} = setupCompletions(template, members, 0);      expect(topLevel.templateContext.has('user')).toBeTrue();
      const userAtTopLevel = topLevel.templateContext.get('user')!;
      expect(inNgFor.templateContext.has('user')).toBeTrue();
      const userInNgFor = inNgFor.templateContext.get('user')!;      expect(userAtTopLevel.kind).toBe(CompletionKind.Reference);
      expect(userInNgFor.kind).toBe(CompletionKind.Variable);
    });    it(      const {program, templateTypeChecker} = setup([{
        fileName: MAIN_TS,'SomeCmp': 'Not important',
        },
        declarations: [
{  file: MAIN_TS,
  name: 'OtherDir',
  selec  file:  pipeName: 'otherPipe',
}        source: `
  export class SomeCmp {}
  export class OtherDir {}
  export class OtherPipe {}`
      }]);
      const sf = getSourceFileOrError(program, MAIN_TS);
           const pipes = templateTypeChecker.getPotentialPipes(SomeCmp) ?? [];
      e    });
  });    template: string, componentMembers: string = '', inChildTemplateAtIndex: number|null = null): {
  completions: GlobalCompletion,
  program: ts.Program,
  templateTypeChecker: TemplateTypeChecker,} {
  const MAIN_TS = absoluteFrom('/main.ts');
  const {templateTypeChecker, programStrategy} = setup(
           }],
      (  const SomeCmp = getClass(sf, 'SomeCmp');  let context: TmplAstTemplate|null = null;
  if (inChildTemplateAtIndex !== null) {`AssertionError: expected TmplAstTemplate at index ${inChildTemplateAtIndex}`);
    }
    context = tmpl;
  }  const completions = templateTypeChecker.getGlobalCompletio  return {
    completions,
    program: programStrategy.getProgram(),
    t