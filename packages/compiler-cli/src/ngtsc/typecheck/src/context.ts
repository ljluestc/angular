/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */   * Any `ts.Diagnostic`s which were produced during the generation of this shim.
   *   */   * Whether any inline operations for the input file   hasInlines: boolean;    * type-checking process.
   */
  templates: Map<TemplateId, TemplateData>; * Data tracked for each template processed by the template type-checking system.
 */  /**
   * Template nodes for which the TCB was generated.  template: TmplAstNod   boundTarget: BoundTarget<TypeCheckableDirectiveMeta>;  /**
   * Errors found while parsing them template, which have been converted to diagnostics.
   */ */
export interface PendingFileTypeCheckingDat   * Whether any inline code has been required by the shim yet.
   */   * Source mapping in   shimData: Map<AbsoluteFsPath, PendingShimData>;  /**
   * Recorder for out-of-band diagnostics which are raised during generation.
   */   */
  file: TypeCheckFile;  /**   */
  templates: Map<TemplateId, TemplateData>;
}/** *
 * Through this interf   getSourceManager(sfPath: AbsoluteFsPath): TemplateSou   * example, the component may have results already available from a prior pass or from a previous
   * program.
   */ * How a type-checking context should handle operations which would require inlining.
 */  /**
   * Use inlining operations when required.
    * Produce diagnost  Error,
}/** *export class Type      private config: TypeCheckingConfig,      private       throw new Error(`AssertionError: invalid inlining configuration.`);
    }
  }  /**
        binder: R3TargetBinder<TypeCheckableDirectiveMeta>, template: TmplAstNode[],
      pipes: Map<string, Reference<ClassDeclaration<ts.ClassDeclaration>>>,
      schemas: SchemaMetadata[], sourceMapp    if (!this.host.shouldCheckComponent(ref.node)) {
      return;
 ...this.getTemplateDi      // Get all of the directives used in the template and record inline type constructors when
         const dirRef fnName: 'ngTypeCtor',
// The constructor should have a body if the directive comes from a .ts filbody: !dirNode.getSourceFile().isDeclarationFile,
fields: {  // TODO(alxhub): support queries        });
      }
         boundTarget,
        id: fileData.sourceManager.captureSource(ref.node, sourceMapping, file),
      boundTarget,
      pipes,
      schemas,
      isStandalone
    };
       // bounds, but TcbGenericContextBehavior.FallbackToAny);
 ref, meta, shimData.domSc   * Record a type constructor for the given `node` with the given `ctorMetadata`.
   */    if (this.typeCtorPending.has(ref.node)) {
      return;
    }    if (!this.opMap.has(sf)) {
      this.opMap.set(sf, []);    const ops = this.opMap   * Transform a `ts.SourceFile` into a version that includes type checking code.
   *
       // If there are no operations pending for this particular file, return `null` to indicate no
    // changes.    // template within it.    const ops = this.opMap.get(sf)!.sort(orderOps);
        .join('\n');  }  finalize(): M      const newText = this.transform(originalSf);
         });
      }
    }    // Then go through each input file that has pending code generation operations.
    for (const [sfPath, pendingFileData] of this.fileMap) {
      // For each input file, consider generation operations for each of its shims.
      for (const pendingShimData of pendingFileData.shimData.values()) {
         updates.set(p  }  private addInlineTypeCheckBlock(
       tcbMeta: TypeCheckBlockMetadata): void {
    const sf = ref.node.getSourceFil       const ops = this.opMap.get(sf)!;
    ops.push(new InlineTcbOp(
        ref, tcbMeta, this.config, this    const fileData = this.dataForFile(node.getSourceFile());
    const shimPath = TypeCheckShimGenerator.shimFor(absoluteFromSourceFile(node.getSourceFile()));
    if (!fileData.shimData.has(shimPath)) {        file: new TypeCheckFile(
  shimPath, this.config, this.refEmitter, this.reflector, this.com      });    return fileData.shimData.get(shimPath)!;
            sourceManager: this.host.getSourceManager(sfPath),
        shimData: new Map(),
      };
         sourceMapping: TemplateSourceMapping): TemplateDiagnostic[] {
    return parseErrors.map(error => {      }/**
 * A   readonly ref: Reference<Cl   */  execute(im: ImportManager, sf: ts.SourceFile, refEmitter: */
class InlineTcbOp implements Op {
  constructor(      */      string {
         env, this.ref, fnName, this.meta, this.domSchemaChecker, this.oobRecorder,
        TcbGenericContextBehavior.CopyClassNodes);
    r}/**
 * A type constructor operation which produces type constructor code for a particular directive.
 */
class TypeCtorOp implements Op {
     return printer.printNode(ts.EmitHint.Unspecified, tcb, sf);
  } *function orderOps(op1: Op, op2: Op): number {}/** */
fun  let start = 0;
     splits.push(str.substring(start, point));
    start = point;  s}
