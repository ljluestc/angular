/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript'; */  private nextTcbId = 1;
  private tcbStatements: ts.Statement[] = [];  constructor(
      readonly fileName: AbsoluteFsPath, config: TypeCheckingConfi    super(
        config, new ImportManager(new NoopImp  compilerHost.getCanonicalFileName(fileName), '', ts.ScriptTarget.Latest, true));
  }  addTypeCheckBlock(      domSchemaChecker: DomSchemaChecker, oobRecorder: OutOfBandDiagnosticRecorder,
      genericContextBehavior: TcbGenericConte    const fn = generateTypeCheckBlock(
     }  render(removeComments: boolean): string {
    let source: string = this.importManager.getAllImports(this.contextFile.fileName)
    .map(i => `import * as ${i.qualifier.text} from '${i.specifier}';`)
    .join('\n') +    const printer = ts.createPrinter({removeComments});
          for (const stmt of this.typeCtorStatements) {
      source += printer.printNode(ts.EmitHint.Unspecified, stmt, this.contextFile) + '\n';
    }
    source += '\n';      source += printer.printNode(ts.EmitHint.Unspecified, stmt, this.contextFile) + '\n';
        }  override getPreludeStatements(): ts.Statement[] {
    return [];
  }
}export function typeCheckFilePath(rootDirs:   return join(shortest, '__ng_typecheck__.ts');
}