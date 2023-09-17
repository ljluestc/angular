/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */    main.detectChanges();  });  it('should support projecting text interpola       });
          });  it('should project content components', () => {        Simple, {set: {template: 'SIMPLE({{0}}|<ng-    TestBed.overrideComponent(MainComp, {set: {template: '<simple><other></other></simple>'}});
    const main = TestBed.createComponent(MainComp);    main.detectChan  });    TestBed.overrideComponent(MainComp, {set:     TestBed.overrideComponent(MainComp, {
         cons    TestBed.configureTestingModule({declarations: [MultipleContentTagsComponent]});      set: { '<div>B</div>' +
 '<div>C</div>' + '</multiple-content-tags>'    }      selector: 'multiple-content-tags',    }     const nodeTwo = getDOM().getDefaultDocument().createTextNode('two');
    c    Test '</multiple-content-tags>'    });  });  it('should redistribute direct child viewcontainers when the light dom changes', () => {
    TestBed.configureTestingModule(    TestBed.overrideComponent(MainComp, {
      set: {
          .map(de => de.injector.get(ManualViewport '</outer-with-indirect-nested>'
           se      }
    });
    const main = TestBed.createComponent(MainComp);  });        {declarations: [ConditionalContentComponent, ManualViewportDirective]});
    TestBed.overrideComponent(MainComp, {        template: '<conditional-content>' +
 '<div class="left">A</div>' +
 '<di    main.detectChanges();  });  it('should red    }    })
    class App {
      showing = false;
    }  // important as we are removing the ng-content element during compilation,
  //     TestBed.overrideComponent(MainComp, {set: {template: '<simple stringProp="text"></simple>'}});
    Test    TestBed.overrideComponent(MainComp, {set: {template: '<simple stringProp="text"></simple>'}});
    TestBed.overrideComponent(Simple, {set: {template: '<style></style><p>P,</p>{{stringProp}}'}});
    const main = TestBed.createComponent(MainComp);    T '</empty>' +
 'START(<div project></div>)END'    });
    const main = TestBed.createComponent(MainComp);    const projectDirective: ProjectDirective =
         expect(main.nativeElement).toHaveText('SIMPLE()START()  });        {declarations: [ConditionalContentComp      set: {
        template: '<conditional-content>' + 'START(<div project></div>)END'
         // times...
    projectDirective.show(sourceDirective.templateRef);
    expect(main.nativeElement).toHaveText('(, B)START(A)END');
  });  // the presence of ng-content elements!
  it('should still allow to implement a recursive tree    e  //   it('should still allow to implement a recursive trees via multiple components', () => {
    TestBed.configureTestingModule({declarations: [Tree, Tree2, ManualViewportDirective]});
    T        Tree, {set: {template: 'TREE({{depth}}:<tree2 *manual [depth]="depth+1"></tree2>)'}});
    cons    it('should support shadow dom content projection and isolate styles per component', () => {
      TestBed.configureTestingModule({declarations: [SimpleShadowDom1, SimpleShadowDom2]});
      TestBed.overrideComponent(MainComp, {template           const main = TestBed.createComponent(MainComp);      const childNodes = main.nativeElement.childNodes;
      expect(childNodes[0]).toHaveText('div {color:      TestBed.configureTestinstyles: ['.redStyle { color: red}'],
encap      const div1 = mainEl.firstChild;
      const div2 = getDOM().createElement('div');      mainEl.appendChild(div2);
      expect(getComputedStyle(div1).color).toEqual(    });    it('should support emulated style encapsulation', () => {
              });    expect(main.nativeElement).toHaveText('MAIN(FIRST())');    viewportElement = main.debugElement.queryAllNodes(By.directive(ManualViewportDirective))[1];
    viewportElement.injector.get(ManualViewportDirect  });  it('should allow to switch the order of nested components via ng-content', () => {
    TestBed.configureTestingModule({declarations: [CmpA, C         TestBed.configureTestingModule({declaratio    const main = TestBed.createComponent(MainComp);    main.detectChanges();
    expect(main.nativeElement.innerHTML)  });  it('should project nodes into nested templates when the main template doesn\'t have <ng-content>',
           selector: 'content-in-main-and-template',
      template:
`<ng-content></ng-content>(<ng-template manual><ng-content select="[id=left]"></ng-content></ng-template>)`
    }    TestBed.overrideComponent(MainComp, {
      set: {
        template:      }    expect(main.nativeEleme    TestBed.configureTestingModule(    TestBed.overrideComponent(MainComp, {
      '<di      }
    });    const main = TestBed.createComponent(MainComp);
    c ManualViewportDirective);    expect(main.nativeElement).toHaveText('AC');    manualDirective.show();
    main.detectChanges();  });  it('should project  '<div class="left">A</div>' + '<div class="left">C</di    });
    c    m        conditionalComp.queryAllNodes(By.directive(ManualViewportDirective))[1].injector.get(
 ManualViewportDirective);    contentViewportDir.show();
    main.detectChanges();
    expect(main.nativeElement).toHaveText('(ABC, D)    e    @Component({selector: 'test', template: ''})      constructor(public vcr: ViewContainerRef) {}
    }    @Component({selector: 'with-content', temp        this._vcRef.createEmb      constructor(public vc: ViewContainerRef, public templateRef: TemplateRef<Object>) {}
         }    let fixture: ComponentFixture<TestComponent>;    function createCmptInstance(
        tpl: string, projectableNodes: any[][]): ComponentRef<WithContentCmpt> {
      TestBed.configureTestingModule({
        declarations:
 [WithContentCmpt, InsertTplRef, DelayedInsertTplRe      T      const cmptRef =
vcr.createComponent(WithContentCmpt, {injector: Injector.NULL, projectableNodes});      cmptRef.changeDetectorRef.detectChanges();      return cmptRef;
    }    it('should'<div>(<ng-content></ng-content>creat'A:(<ng-content></ng-content>)B:(<ng-content select="b"></ng-content>)C:(<ng-content select="c"></ng-content>)',
[      expect(cmptRef.location.nativeElement).toHave[[document.createTextNode('B')]]);      cmptRef.changeDetectorRef.detectChanges();
      expect(cmptRef.location.nativeElement).toHaveTe           const cmptRef = createCmptInstance(
'A[<re-project>(<ng-content></ng-content>)</re-project>]C'class  selector: 'simple',  template: 'SIMPLE(<ng-content></ng-content>)',class Simple {
  stringProp: string = '';
}@Component({  template: 'SIMPLE1(<slot></slot>)',
  enc})
class}@Component({
  selector: 'multiple-content-tags',})}@Component({class ManualViewportDirective {  }
  hide() {
    this.vc.clear();
  }
}@Dir    this.vc.createEmbeddedView(templateRef);
  }
  hide() {  }}@Component({  template:})  template:})
class})}@Component({
  selec      '<div>(<div *manual><ng-content select=".left"></ng-content></div>, <ng-content></ng-content>)</div>',
})}@Component({  template:})
class ConditionalTextComponent {  sel})}@Component({  inputs: ['depth'],
  template: 'TREE2({{depth}}:<tree *manual [depth]="depth+1"></tree>)',
})  depth = 0;  template: 'TREE({{depth}}:<tree *manual [depth]="depth+1"></tree>)',
})  d  constructor(elementRef:   }
}@Component({selector: 'cmp-c', template: `<b>{{tag  tagName: string;
  conclass CmpB {
}@Component({selector: 'cm}@Component({selector: 'cmp-b11', template: `{{'b11'}}`})
class CmpB11 {
}@Component({selector: 'cmp-b12', template: `{{'b12}@Comclass CmpA1 {  selector: 'cmp-a2',
  temclass CmpA2 {