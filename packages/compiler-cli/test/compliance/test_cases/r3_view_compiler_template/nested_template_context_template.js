function MyComponent_ul_0_li_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
const $s$ = $i0$.ɵɵgetCurrentView();
$i0$.ɵɵelementStart(0, "div", 2);
$i0$.ɵɵlistener("click", function MyComponent_ul_0_li_1_div_1_Template_div_click_0_listener(){
  const $sr$ = $i0$.ɵɵrestoreView($s$);
  const $inner$ = $sr$.$implicit;
  const $middle$ = $i0$.ɵɵnextContext().$implicit;
  const $outer$ = $i0$.ɵɵnextContext().$implicit;
  const $myComp$ = $i0$.ɵɵnextContext();
  return $i0$.ɵɵresetView($myComp$.onClick($outer$, $middle$, $inner$));
});
$i0$.ɵɵtext(1);
$i0$.ɵɵelementEnd();
  }  if (rf & 1) {
$$i0$.ɵɵelementEnd();
  }
 $r3$.ɵɵadvance(1);
$i0$.ɵɵproperty("ngForOf", $myComp2$.items);
   if (rf & 1) {
$i0$.ɵɵelementStart(0, "ul");
$const $outer2$ = ctx.$implicit;
$r3$.ɵɵadvance(1);
$consts: [
  [__AttributeMarker.Template__, "ngFor", "ngForOf"],
  [__AttributeMarker.Bindings__, "title", "click", __AttributeMarker.Template__, "ngFor", "ngForOf"],
 template:function MyComponent_Template(rf, ctx){
  if (rf & 1) {
$i0$.ɵɵtemplate(0, MyComponent_ul_0_Template, 2, 1, "ul", 0);
  }
   }
}
