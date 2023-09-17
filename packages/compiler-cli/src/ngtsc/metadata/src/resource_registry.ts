/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  }  registerResources(resou    for (const style of resources.styles) {
   }  registerTemplate(templateResource: Resource,      t    if (!this.componentToTemplateMap.has(component)) {
       return this.componentToTemplateMap.get(component)!;
     if (!this.componentToStylesMap.has(component)) {
      this.componentToStylesMap.set(component, new Set());
          }
      this.externalStyleToComponentsMap.get(path)!.add(component);
      r    }    return this.externalStyleToComponentsMap.get(styleUrl)!;
  }