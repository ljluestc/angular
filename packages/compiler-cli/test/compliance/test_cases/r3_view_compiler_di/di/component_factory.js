
MyComponent.ɵfac = function MyComponent_Factory(t) {
  return new (t || MyComponent)(
$r3$.ɵɵinjectAttribute('name'),
$r3$.ɵɵinjectAttribute(dynamicAttrName()),
$r3$.ɵɵdirectiveInject(MyService),
$r3$.ɵɵdirectiveInject(MyService, 1),
$r3$.ɵɵdirectiveInject(MyService, 2),
$r3$.ɵɵdirectiveInject(MyService, 4),
$r3$.ɵɵdirectiveInject(MyService, 8),
$r3$.ɵɵdirectiveInject(MyService, 10)
  );
}