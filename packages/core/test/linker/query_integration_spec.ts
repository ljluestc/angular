/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */      NeedsViewQueryOrderWith      NeedsViewChildren,      NeedsStaticContentAndViewChild,
      NeedsContentChild,
      DirectiveNeedsContentCh      NeedsNamedTpl,      InertDirective,
      NeedsFourQueries,
      NeedsContentChildrenWit      NeedsViewChildrenWithRead,      NeedsContentChildrenShallow,
      NeedsContentChildTemplateRef,
      NeedsContentChildTemplateRefApp,
      NeedsViewContainerWithRead,
      ManualProjecting
    ]
  }));  describe('querying by directive type', () => {
    it('should contain all direct child directives in the light dom (constructor)', () => {
      const template = `
 <div text="1"></div>
 <needs-query text="2">
   <div text="3">
 <div  </needs-query>
 <div text="4"></div>
`;
      const view = createTestCmpAndDetectChanges(MyComp0, template);      // Queries don't match host nodes of a directive that defines a content query.
      expect(asNativeElements(view.debugElement.children)).toHaveText('3|');
    });    it('should contain all direct child directives in the content dom', () => {
            view.detectChanges();
      expect(q.textDirChildren.length).toEqual(1);
      expect(q.numberOfChildrenAfterContentInit).toEqual(1);
    });    it('should contain the first content child', () => {'<needs-content-child #q><div *ngIf="shouldShow" text="foo"></div></needs-content-child>';
      const view = createTestCmp(MyComp0, template);
      v      const q: NeedsContentChild = view.debugElement.children[0].references!['q'];
            ]);
    });    it('should contain the first content child when target is on <ng-template> with embedded view (issue #16568)',
       () => {
plate = <ng-template text="foo" [ngIf]="true">  </ng-template>
</div>
<needs- <div text="bar"></div>
   </n  view.debugElement.children[0].injector.get(DirectiveNeedsContentChild);
rective      const template = '<needs-view-child #q></needs-view-child>';
      const view = createTestCmpAndDetectChanges(MyComp0, template);      const q: NeedsViewChild = view.debugElement.children[0].references!['q'];
      e      expect(q.logs).toEqual([      ]);
    });    it('should contain the first view child across embedded views', () => {
      T      TestBed.overrideComponent(NeedsViewChild, {
            q.shouldShow2 = true;
      q      q.logs = [];
      view.detectChanges();    });    it('should contain all directives in the light dom when descendants flag is used', () => {
      c'<div text="5"></div>';      expect(asNativeElements(view.debugElement.children)).toHaveText('3|4|');
    });'<needs-query text="2"><div text="3"></div></needs-query>' +
'<div t      expect(asNativeElements(view.debugElement.children)).toHaveText('3|');
    });    it('should reflect dynamically inserted directives', () => {      const view = createTestCmpAndDetectChanges(MyComp0, template);
      // Queries don't match host nodes of a directi      view.detec      expect(asNativeElements(view.debugElement.children)).toHaveText('3|');      const template = '<div text="1"></div>' +
'<needs-query text="2"><div *ngIf="shouldShow" [text]="\'3\'"></div></needs-query>' +
'<div t'<needs-query text="2"><div *ngFor="let  i of list" [text]="i"></div></needs-query>' +
'<div text="4"></div>';      /      view.detectChanges();
      /      const template = '<has-null-query-condition></has-null-   stringify(HasNullQueryCondition)}" since the query selector wasn't defined.`);
    });      const view = createTestCmpAndDetectChanges(MyComp0, template);
      c      const template =
'<needs      const needsTpl: NeedsNamedTpl = view.debugElement.children[0].injector.g  });  describe('read a different token', () => {
    it('should contain the first content child', () view.debugElemen    });    it('should contain the first descendant content child', () => {      const view = createTestCmpAndDetectChanges(MyComp0, template);      const comp: NeedsContentChildWithRead =
view.debugElement.children[0].injector.get(NeedsContentChildWithRead);
      e<ng-template [ngIf]="true">
  <div #q></div>ontent-       () => {
plate =mp.children.length).toBe(1);
       });    it('should contain the first descendant content child plate = `<needs-content-children-shallow>
  <div *ngIf="true" #q directive-needs-content-child></div>
ontent-  <div #q></div>
</ng-container>      const view = createTestCmpAndDetectChanges(MyComp0, template);      const comp = view.debugElement.children[0].injector.get(NeedsContentChildrenShallow);
      expect(comp.children.length).toBe(1);      c      const view = createTestCmp(MyComp0, template);      // can't execute checkNoChanges as our view modifies our content children (via a query).
      view.detectChanges(false);
      e      const template = '<needs-view-child-read></needs-view-child-read>';    }      const view = createTestCmpAndDetectChanges(MyComp0, template);      const comp: NeedsViewChildrenWithRead =
view.debugElement.children[0].injector.get(NeedsViewview.debugElement.children[0].injector.get(NeedsViewContainerWithRead);
      comp.createView();
      e  });  describe('changes', () => {  '<div *ngIf="shouldShow" text="2"></div>' +w = createTestCmpAndDetectChanges(MyComp0, template); view.debugElement.children[0].references!['q'];hanges.subscribe({
next: () => {
  expecanges.closed).toBeTruthy();
QueryListCompleted).toBeTruthy();onentInstance.shouldShow = true; NeedsQ       () => {
plate = '<needs-query-by-ref-binding #q>' +  '</ne view.debugElement.children[0].references!['q'];onentInstance.list = ['1d', '2d'];
ctChanges();query.last.text).toEqual('2d');
       });    it('should support querying by multiple var bindings', () => {
      cons'<div text="two" #textLabel2="textDir"></div>' +      const view = createTestCmpAndDetectChanges(MyComp0, template);
      const q = view.debugElement.children[0].references!['q'];      expect(q.query.first.text).toEqual('one');
      e      view.componentInstance.list = ['2d', '1d'];
      view.detectChanges();    });    it('should contain all the elements in the light dom with'<div *ngFor="let item of list">' +
'<div #textLabel>{{item}}</div>' +      c      expect(q.query.first.nativeElement).toHaveText    });    it('should contain all the elements in the light dom even if they get projected', () => {
      const template = '<needs-query-and-project #q>' +
'<div t      const template = '<needs-view-query-by-ref-binding #q></needs-view-query-by-ref-binding>';
      const view = cre      const view = createTestCmpAndDetectChanges(MyComp0, template);
       });  describe('querying in the view', () => {      const template = '<needs-view-query #q><div text="ignoreme"></div></needs-view-query>';
      const view = createTestCmpAndDetectChanges(MyC      const view = createTestCmpAndDetectChanges(MyComp0, template);
      const q: NeedsViewQueryIf = view.debugElement.children[0].references!['q'];
      e         });    it('should not be affected by other changes in the component',      expect(q.query.first.text).toEqual('1');      q.show = false;      expect(q.query.length).toEqual(1);    });    it('should maintain directives in preplate = '<needs-view-query-order #q></needs-view-query-order>';
w = createTestCmpAndDetectChanges(MyComp0, template);
NeedsViewQueryOrder = view.debugElement.children[0].references!['q'];query.map((d: TextDirective) => d.text)).toEqual(['1', '2', '3', '4']);['-3', '2'];
ctChang       });    it('should support more than three queries', () => {
      const template = '<needs-four-queries #q><div text="1"></div></needs-four-queries>';
      const view = createTestCmpA      expect(q.query1).toBeDefined(      e      view.detectChanges();
      expect(q.query.map((d: TextDirective) => d.text)).toEqual(['1']);      q.destro      e      const template = `<manual-projecting #q>  <div [text]="x"></div>
   </ng-template>      const view = createTestCmpAndDetectChanges(MyComp0, template);
      cons      const view2 = q.vc.createEmbeddedView(q.template, {'x': '2'});      // 2 views were created and inserted so we've got 2 matching results
      view      q.vc.detach(0);      // both views were detached so       expect(q.query.map((d: TextDirective) => d.text)).toEqual([]);      q.vc.insert(view2);
      q.vc.insert(view1);      // previously detached views are      // - the order results from views reflects orders of views
      v      view.detectChanges();      expect(q.query.length).toBe(1);      view.componentInstance.shouldShow = false;
      view.detectChanges();      expect(q.query.length).toBe(0);         {selector: 'auto-projecting', template: '<div *ngIf="true; @ContentChild(TemplateRef) content!: TemplateRef<any>;
@ContentChildren(TextDirective) query!: QueryList<TextDirective>;onfquery.lclass TextDirective {}@Compo  @ContentChildren(TextDirective) textDirChildren!: QueryList<TextDirective>;
  numberOfChildrenAfterContentInit!: number;  ngAfterContentInit() {
    thi}@Component({selector: 'needs-content-child', template: ''})
class NeedsContentChild implements AfterContentInit, AfterContentChe    thi    return this._child;
  }
  logs: (string|null)[][] = [];  ngAfterContentInit() {
    t}@Dir  @ContentChild(TextDirective) child!: TextDirective;class NeedsViewChild implements AfterViewInit, AfterViewChecked {
  shouldShow: boolean = true;  const view = TestBed.overrideComponent(type, {set: {template}}).createComponent(type);
  return view;
}functi}@Com  @Cont}@Directive({selector: '[dir]'})class NeedsQuery {}@Component({selector: 'needs-four-queries', templ  @ContentChild(TextDirective) query1!: TextDirective  @Cont}@Component({  template: '<ng-content></ng-content><div *ngFor="let  dir of query">{{dir.text}}|</div>'
})
class NeedsQueryDesc {}@Component({selector: 'needs-query-by-ref-binding', template: '<ng-con  @ContentChildren('textLabel', {descendants: true}) query!: QueryList<any>;
}@Compo  @ViewChiclass NeedsQueryByTwoLabels {  template: '<div *ngFor="let  dir of query">{{dir.text}}|</div><ng-content></ng-content>'
})  @ContentChildren(TextDirective) query!: QueryList<TextDirective>  selec  show: boolean = true;
  @View  selector: 'needs-view-query-order',
  template: '<div text="1"></div>' +
      '<div *ngFor="let  i of lis})
class NeedsViewQueryOrder {
  @View  @ContentChildren(TemplateRef) query!: QueryList<TemplateRef<Object>>;
  constructor(public vc: ViewContainerRef) {}    {selector: 'needs-named-tpl', template: '<ng-template #tpl><div>shadow</div></ng-template>'})
class NeedsNamedTpl {
  @Viewclass NeedsContentChildrenWithRead {  @ContentChildren('nonExisting', {read: TextDirective}) nonExistingVar!: QueryList<TextDirective>;
}@Component({selector: 'needs-content-child-read', te  @ContentChild('q', {read: TextDirective}) textDirChild!: TextDirective;
  @Content}@Component({  template: '<div [ngTemplateOutlet]="templateRef"></div>'
})  selector: 'needs-co      '<ng-template>OUTER<ng-template>INNER</})}@Component({
  selector: 'needs-view-c})  @ViewChildren('q,w', {read: TextDirective}) textDirChildren!: QueryList<TextDirective>;
  @View  @ViewChild('q', {read: ViewContainerRef}) vc!: ViewContainerR  @ContentChild(TemplateRef, {static: true}) template!: TemplateRef<Object>;  createView() {
    this.vc.createEmbeddedView(this.template);
  }class HasNullQueryCondition {}@Component({selector: 'my-comp', template: ''})
class MyComp0 {  list: string[] = ['1d', '2d', '3d'];class M  @ViewChild('vc', {read: ViewContainerRef}) vc!: ViewContain    this.vc.createEmbeddedView(this.template);
  }  destroy() {