/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */export interface RemoteScope {    */}export enum ComponentScopeKind {
  NgModule,
  Standalone,   kind: ComponentScopeKind.Standalone;
  dependencies: Array<DirectiveMeta|PipeMeta|NgModuleMeta>;
   isPoisoned: boolean;
}export type ComponentScope = LocalModuleScope|StandaloneScope;/**
 * Read information about the compilation scop }
