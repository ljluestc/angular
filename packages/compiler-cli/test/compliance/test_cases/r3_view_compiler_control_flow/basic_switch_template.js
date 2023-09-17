function MyApp_Case_2_Template(rf, ctx) {
  if (rf & 1) {
$r3$.ɵɵtext(0, " case 0 ");
  }
}$}function MyApp_Template(rf, ctx) {
  if (rf & 1) {
$$  }
  if (rf & 2) {
 $$r3$.ɵɵconditional(2, ($MyApp_contFlowTmp$ = ctx.value()) === 0 ? 2 : $MyApp_contFlowTmp$ === 1 ? 3 : $MyApp_contFlowTmp$ === 2 ? 4 : 5);
  }
}
