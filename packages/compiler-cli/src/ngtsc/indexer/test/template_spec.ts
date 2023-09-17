/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      expect(ref).toEqual({        kind: Ident      const refs = getTemplateIdentifiers(bind(template));    });    it('should handle arbitrary whitespace', () => {
      const template = '\n\n   {{foo}}';      expect(ref).toEqual({
        name: 'foo',        span: new AbsoluteSourceSpan(7, 10),
        target: null,target: null,kind: IdentifierKind.Property,
span: new AbsoluteSourceSpan(24, 27),        },name: 'span: new AbsoluteSourceSpan(2, 5),
target: null,        const refs = getTemplateIdentifiers(bind(template));
        expect(refs.size).toBe(1);        const [ref] = Arname: 'foo',
kind: IdentifierKind.Property,
s       target: null,      });      it('should ignore identifiers that are not implicitly received by the template', () => {
        const template = '{{foo.bar.baz}}';
               kind: IdentifierKind.Property,
span: new AbsoluteSourceSpan(12, 15),
target: null,      });      it('should handle bound attrib       name: 'div',
kind: IdentifierKind.Element,name: 'div',
kind: IdentifierKind.Reference,target: {node: elementRefer        expect(refArr).toContain({
name: 'div',
kind: IdentifierKind.Property,
span: n        }        const template = '<div [bar]="bar ? bar1 : bar2"></div>';
       {  kind: I  target: null,
},
{  target: null,
},      });      it('should discover properties in template expressions', () => {
       kind: Itarget: null,
        });
      });      it('should discover properties in template   targe        ]));
      });{
  name: 'foo',  span: new AbsoluteSourceSpan(14, 17),
  target: {
  name: 'bar',
  kind: IdentifierKind.Property,
  span: new AbsoluteSourceSpan(18, 21),
  targe        ]        expect(refArr).toEqual(jasmine.arrayContaining([{
  name:      });      it(        const refs = getTemplateIdentifiers(bind(template));
        expect(refs.size).toBe(1);        const [ref] = Array.from(refs);
        expect(ref).toEqual({target: null,
        }        c        expect(refArr).toContain({
name: 'foo',
kind: IdentifierKind.Property,target: null,      });      it('should ignore identifiers that are not implicitly received by the template', () => {
               expect(refs.size).toBe(1);        const [ref] = Array.from(refs);
        expect(ref.name).toBe('foo');
      });        const refs = getTemplateIdentifiers(bind(name: 'ba        });
      }        });      const refs = getTemplateIdentifiers(bind(template));
      c        kind: IdentifierKind.Element,
        span: new AbsoluteSourceSpan(1, 4),    }] as TopLevelIdentifier[]));
    });    it('should discover nes      const refs = getTemplateIdentifiers(bind(template));
      cons        kind: IdentifierKind.Element,
        span: new AbsoluteSourceSpan(6, 10),
        attributes: new Set(),
        usedDirectives: new Set(),
      }jasmine.a      const refs = getTemplateIdentifiers(bind(template));
      c      };      const refArr = Array.from(refs);
      expect(refArr).toEqual(jasmine.arrayContaining([
        elementIdentifier, referenceIdentifier, {target: r      ] as TopLevelIdentifier[]));
    });    it('should discover for      const refs = getTemplateIdentifiers(bind(template));
      const elementIdentifier: ElementIdentifier = {
        name: 'div',        span: new AbsoluteSourceSpan(8, 11),
        attributes: new Set(),
        u        k      expect(refArr).toEqual(jasmine.arrayContaining([
        elementIdentifier, referenceIdentifier, {
name: 'foo',span: new AbsoluteSourceSpan(2, 5),        }    });    it('should generate information directive targets', () => {
      c      const boundTemplate = util.g      ]);      const refs = getTemplateIdentifiers(boundTemplate);
      const refArr = Array.from(refs);
      let      expect(fooRef.target!.node.kind).toBe(Ident    });          name: 'div',
             };      const refArr = Array.from(refs);
      expect(refArr).toEqual(jasmine.arrayContaining([
        elementIdentifier, referenceIdentifier, {  });  describe('generates identifiers for template variables', () => {
    it(      const refs = getTemplateIdentifiers(bind(template));      const refArray = Array.from(refs);
      expect(refArray).toEqual(jasmine.arrayContaining([{
  name:  span:     });    it('should discover variables wi  span: new AbsoluteSourceSpan(17, 20),
}] as TopLevelIdentifier[]));
    });      const refs = getTempl  name: 'foo',
  kind: Id}] as TopLevelIdentifier[]));
    });    it('should discover references to variables', () => {
      const template = `<div *ngFor="let foo of foos; let i = index">{{foo + i}}</div>`;
      const refs = getTemplateIdentifiers(bind(template));
      c      };kind: IdentifierKind.Property,
span: new AbsoluteSourceSpan(47, 50),        },
        iIdentifier,name: 'i'span: new AbsoluteSourceSpan(        },    });    it('should discover references to variables', () => {
      co      const variableIdentifier: VariableIdentifier = {
        name: 'foo',
        kind: IdentifierKind.Variable,
             expect(refArr).toEqual(jasmine.arrayContaining([
        vkind: IdentifierKind.Property,
span: n        }    });
  });  describe('generates identifiers for elements', () => {
    it('should record elements as       const refs = getTemplateIdentifiers(bind(template));
      expect(refs.size).toBe(1);      const [ref] = Array.from(refs);
      exp      exp        usedDirectives: new Set(),
      });
    });    it('should discover selectors in self-closing ele      exp               attributes: new Set(),
        usedDirectives: new Set(),
      });
    });    it('should discover sel      con      expect(ref as ElementIdentifier).toEqual({
        name: 'test-selector',
        k      const template = '<test-selector> text </test-selector      expect(refs.size).toBe(1);      const [ref] = Array.from(refs);
      expect(ref as ElementIdentifier).toEqual({
             });    it('should discover nested selectors', () => {
      con      expect(refArr).toContain({
           });    it('should generate information about attributes', () => {
      co      const attrs = (ref as ElementIdentifier).attributes;
      expect(attrs).toEqual(new Set<AttributeIdentifier>([
        {
name: 'attrA',span:    kind: IdentifierKind.Attribute,
span:      ]));
    });    it('should generate information about used directives', () => {
      const declA = util.getComponentDeclaration('class A {}', 'A');
      const declB = util.getComponentDeclaration('class B       const template = '<a-selector b-selector></a-selector>';
      const boundTemplate = util.getBoundTemplate(template, {}, [
                     c      expect(usedDirectives).toEqual(new Set([
        {        {selector: '[b-selector]',
        },
        {
node: d    });    it('should recor      const refs = getTemplateIdentifiers(bind(template));
      expe    });    it('should record template names as their tag name', () => {
      c      expect(refs.size).toBe(1);      const [ref] = Array.from(refs);
      expect(ref as TemplateNodeIdentifier).toEqual({
        name: 'ng-template',
                attributes: new Set(),
        usedDirectives: new Set(),
      });      const template = '<ng-template attrA attrB="val">';
      const refs = getTemplateIdentifiers(bind(template));        expect(attrs).toEqual(new Set<AttributeIdentifier>([
        {kind: Ide        },
        {
name: 'attrB',span: n      ]));
    });       const declC = util.getComponentDeclaration('class C {}', 'C');
      const template = '<ng-template b-selector>';
      const boundTemplate = util.getBoundTemplate(template, {}, [
             const usedDirectives = (ref as ElementIdentifier).usedDirectives;
      expnode: declB,
selecto        {selector: ':not(never-selector)',
         });    it('should handle interpolations in attributes, preceded by HTML entity', () => {
      const template = `<img src="        {
kind: IdentifierKind.Element,span: new AbsoluteSourceSpan(1, 4),
usedDirecspan: new