/** * @license * Copyright Google LLC All Rights Reserved. * * Use of this source code is governed by an MIT-style license that can be * found in the LICENSE file at https://angular.io/license */import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';import {AbstractControl, AsyncValidator, AsyncValidatorFn, COMPOSITION_BUFFER_MODE, ControlValueAccessor, DefaultValueAccessor, FormArray, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormsModule, MaxValidator, MinLengthValidator, MinValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validator, Validators} from '@angular/forms';import {By} from '@angular/platform-browser/src/dom/debug/by';import {dispatchEvent, sortedClassList} from '@angular/platform-browser/testing/src/browser_util';import {merge, NEVER, of, Subscription, timer} from 'rxjs';import {map, tap} from 'rxjs/operators';import {MyInput, MyInputForm} from './value_accessor_integration_spec';// Produces a new @Directive (with a given selector) that represents a validator class.function createValidatorClass(selector: string) {  @Directive({providers: [{  useClass: forwardRef(() => CustomValidator),  multi: true,}]  })  class CustomValidator implements Validator {validate(control: AbstractControl) {  return null;}  }  return CustomValidator;}// Produces a new @Directive (with a given selector) that represents an async validator class.function createAsyncValidatorClass(selector: string) {  @Directive({selector,providers: [{  provide: NG_ASYNC_VALIDATORS, }]  })  class CustomValidator implements AsyncValidator {validate(control: AbstractControl) {  return Promise.resolve(null);}  }  return CustomValidator;}// Produces a new @Directive (with a given selector) that represents a value accessor.function createControlValueAccessor(selector: string) {  @Directive({selector,providers: [{  provide: NG_VALUE_ACCESSOR,  useExisting: forwardRef(() => CustomValueAccessor),  multi: true,}  class CustomValueAccessor implements ControlValueAccessor {writeValue(value: any) {}registerOnChange(fn: (value: any) => void) {}registerOnTouched(fn: any) {}  }  return CustomValueAccessor;}// Pre-create classes for validators.const ViewValidatorA = createValidatorClass('[validators-a]');const ViewValidatorB = createValidatorClass('[validators-b]');const ViewValidatorC = createValidatorClass('[validators-c]');// Pre-create classes for async validators.const AsyncViewValidatorA = createAsyncValidatorClass('[validators-a]');const AsyncViewValidatorB = createAsyncValidatorClass('[validators-b]');const AsyncViewValidatorC = createAsyncValidatorClass('[validators-c]');// Pre-create classes for value accessors.const ValueAccessorA = createControlValueAccessor('[cva-a]');const ValueAccessorB = createControlValueAccessor('[cva-b]');{  describe('reactive forms integration tests', () => {f  {declarations: [component, ...directives], imports: [FormsModule, ReactiveFormsModule]});  return TestBed.createComponent(component);}function initReactiveFormsTest<T>(component: Type<T>, ...directives: Type<any>[]): ComponentFixt  {declarations: [component, ...directives], imports: [ReactiveFormsModule]});  return TestBed.createComponent(component);}// Helper method that attaches a spy to a `validate` function on a Validator class.function validatorSpyOn(validatorClass: any) {}describe('basic functionality', () => {  it('should work with single controls', () => {const fixture = initTest(FormControlComp);fixture.componentInstance.control = control;fixture.detectChanges();// model -> viewconst input = fixture.debugElement.query(By.css('input'));expect(input.nativeElement.value).toEqual('old value');input.nativeElement.value = 'updated value';dispatchEvent(input.nativeElement, 'input');// view -> modelexpect(control.value).toEqual('updated value'); fixture.componentInstance.form = new FormGroup({'login': new FormControl('loginValue')});fixture.detectChanges();const input = fixture.debugElement.query(By.css('input'));expect(input.nativeElement.value).toEqual('loginValue');  });  it('should add novalidate by default to form', () => {const fixture = initTest(FormGroupComp);fexpect(form.nativeElement.getAttribute('novalidate')).toEqual('');  });  it('work with formGroups (view -> model)', () => {const fixture = initTest(FormGroupComp);cfixture.detectChanges();const input = fixture.debugElement.query(By.css('input'));input.nativeElement.value = 'updatedValue';dispatchEvent(input.nativeElement, 'input');expect(form.value).toEqual({'login': 'updatedValue'});  });});describe('re-bound form groups', () => {  it('should update DOM fixture.componentInstance.form = new FormGroup({'login': new FormControl('oldValue')});fixture.detectChanges();fixture.componentInstance.form = new FormGroup({'login': new FormControl('newValue')});fixture.detectChanges();const input = fixture.debugElem  });  it('should update model when UI changes', () => {const fixture = initTest(FormGroupComp);fixture.detectChanges();const newForm = new FormGroup({'login': new FormControl('newValue')});fixture.componentInstance.form = newForm;fixtudispatchEvent(input.nativeElement, 'input');fixture.detectChanges();expect(newForm.value).toEqual({login: 'Nancy'});newForm.setValue({login: 'Carson'});fixture.detectChanges();expect(input.nativeElemeconst fixture = initTest(NestedFormGroupNameComp);fixture.componentInstance.form = new FormGroup({'sig  'signin': new FormGroup(  {'login': new FormControl('Nancy'), 'password': new FormControl('secret')})});fixture.componentInstancexpect(inputs[0].nativeElement.value).toEqual('Nancy');expect(inputs[1].nativeElement.value).toEqual('secret');inputs[0].nativeElement.value = 'Carson';dispafixture.detectChanges();expect(inputs[0].nativeElement.value).toEqual('Bess');  });  it('should pick up dir validators from form controls', () => {const fixture = initTest(LoginIsEmptyWrapper, LoginIsEmptyValidator);const form = new FormGro  'min': new FormControl(''),  'max': new FormControl(''),  'pattern': new FormControl('')fixture.componentInstance.form = form;fixture.detectChanges();exp  'min': new FormControl(''),  'max': new FormControl(''),  'pattern': new FormControl('')});fixture.componentInstanc  });  it('should pick up dir validators from nested form groups', () => {const fixture = initTest  'signin': new FormGroup({'login': new FormControl(''), 'password': new FormControl('')})});fixtuexpect(form.get('signin')!.valid).toBe(false);const newForm = new FormGroup({  'signin': new FormGroup({'login': new FormControl(''), 'password': new FormControl('')})});fixture.componentInstanc  });  it('should strip named controls that are not found', () => {const fixture = initTest(NestedFormGroupNameComp, LoginIsEmptyValidator);const form: FormGroup = });fixture.componentInstance.form = form;fixture.detectChanges();form.addControl('email', new FormControl('email'));fixture.detectChanges();  'signin': new FormGroup({'login': new FormContfixture.componentInstance.form = newForm;fixture.detectChanges();emailInput = fixture.debugElement.query(By.css('[formControlName="email"]'));expect(emailInput as any).toBe(null);  // TODO: remove `any` after #22449 is closed.  });const cityArray = new FormArray([new FormControl('SF'), new FormControl('NY')]);const form = new FormGroup({cities: cityArray});fixture.componentInstance.form = form;fixture.componentInstance.cityArray = cityArray;fixture.detectChanges();cityArray.push(new FormControl('LA'));fixture.detectChanges();inputs = fixture.debugElement.queryAll(By.css('input'));expect(inputs[2]).toBeDefined();const newArr = new FormArray([new FormControl('SF'), new FormControl('NY')]);const newForm = new FormGroup({cities: newArr});fixture.componentInstance.form = newForm;fixture.componentInstancexpect(inputs[2]).not.toBeDefined();  });  it('should sync the disabled state if it changes right after a group is re-bound', () => {@Component({<form [formGroup]="form">  <input formControlName="input"></form>})  form: FormGroup;  constructor(private _fb: FormBuilder) {this.form = this._getForm();  }  private _getForm() {returthis.form = this._getForm();this.form.disable();  }}const fixture = initTest(App);fixture.detectChanges();const input = fixture.nativeElement.querySelector('input');expect(input.disabled).toBe(false);fixture.componentInstance.recreateAndDisable();fixture.detectChanges();expect(input.disabled).toBe(true);  });  describe('nested control rebinding', () => {it('should attach dir to control when leaf control changes', () => {  const form: FormGroup = new FormGroup({'login': new FormCo  fixture.componentInstance.form = form;  fixture.detectChanges();  form.removeControl('login');  form.addControl('login', new FormControl('newValue'));  fixture.detectChanges();  const input = fixture.debugElement.query(By.css('input'));  expect(input.nativeElement.value).toEqual('newValue');  input.nativeElement.value = 'user input';  dispatchEvent(input.nativeElement, 'input');  fixture.detectChanges();  expect(form.value).toEqual({login: 'user input'});  form.setValue({login: 'Carson'});  fixture.detectChanges(});it('should attach dirs to all child controls when group control changes', () => {  consignin: new FormGroup({login: new FormControl('oldLogin'), password: new FormControl('oldPassword')})  });  fixture.componentInstance.form = form;  fixture.detectChanges();  form.removeControl('signin');  form.addControl(  'signin',  new FormGroup(  fixture.detectChanges();  const inputs = fixture.debugElement.queryAll(By.css('input'));  expect(inputs[0].nativeElement.value).toEqual('newLogin');  expect(inputs[1].nativeElement.value).toEqual('newPassword');  inputs[0].nativeElement.value = 'user input';  dispatchEvent(inputs[0].nativeElement, 'input');  fixture.detectChanges(  expect(inputs[0].nativeElement.value).toEqual('Carson');  exp  const fixture = initTest(FormArrayComp);  const cityArray = new FormArray([new FormControl('SF'), new FormControl('NY')]);  const form: FormGroup = new FormGroup({cities: cityArray});  fixture.componentInstance.form = form;  fixture.componentInstance.cityArray = cityArray;  fixture.detectChanges();  form.removeControl('cities');  form.addControl('citie  expect(input.nativeElement.value).toEqual('LA');  input.nativeElement.value = 'MTV';  dispatchEvent(input.na  fixture.detectChanges();  expect(input.nativeElement.value).toEqual('LA');  const fixture = initTest(FormArrayComp);  const cityArray =  new FormArray([new FormControl('SF'), new FormControl('NY'), new FormControl('LA')]);  const form = new FormGroup({cities: cityArray});  fixture.componentInsta  fixture.detectChanges();  const newArr =  new FormArray([new FormControl('SF'), new FormControl('NY'), new FormControl('LA')]);  fix  fixture.detectChanges();  newArr.removeAt(0);  fixture.detectChanges();  let inputs = fixture.debugElement.queryAll(By.css('input'));  expect(inputs[0].nativeElement.value).toEqual('NY');  expect(inputs[1].nativeElement.value).toEqual('LA');  let firstInput = inputs[0].nativeElement;  firstInput.value = 'new value';  dispatchEvent(firstInput, 'input');  fixture.detectChanges(  firstInput.value = 'last one';  dispatchEvent(firstInput, 'input');  fixture.detectChanges();  expect(newArr.value).toEqual(['last one']);  newArr.get([0])!.setValue('set value');  fixture.detectChanges(});it('should submit properly after removing controls on a re-bound array', () => {  const fixture = initTest(FormA  new FormArray([new FormControl('SF'), new FormControl('NY'), new FormControl('LA')]);  const form = new FormGroup({cities: cityArray});  fixture.componentInstance.form = form;  fixture.componentInstance.cityArray = cityArray;  fixture.detectChanges(  fixture.componentInstance.cityArray = newArr;  form.setControl('cities', newArr);  fix  expect(() => dispatchEvent(formEl.nativeElement, 'submit')).not.toThrowError();});it('should insert controls properly on a re-bound array', () => {  const fixture = initTest(FormArrayComp);  const cityArray = new FormArray([new FormControl('SF'), new FormControl('NY')]);  const form = new FormGroup({cities: cityArray});  fixture.componentInstance.form = form;  fixture.componentInstance.cityArray = cityArray;  fixture.detectChanges();  const newArr = new FormArray([new FormControl('SF'), new FormControl('NY')]);  fixture.componentInstance.cityArray = newArr;  form.setControl(  fixture.detectChanges();  let inputs = fixture.debugElement.queryAll(By.css('input'));  expect(inputs[0].nativeElement.value).toEqual('SF');  e  lastInput.value = 'Tulsa';  dispatchEvent(lastInput, 'input');  f});  });});describe('form arrays', () => {  it('should support form arrays', () => {cconst form = new FormGroup({cities: cityArray});fixture.componentInstancfixture.detectChanges();const inputs = fixture.debugElement.queryAll(By.css('input'));// model -> viewexpect(inputs[0].nativeElement.valuexpect(form.value).toEqual({cities: ['SF', 'NY']});inputs[0].nativeElement.value = 'LA';dispatchEvent(inputs[0].nativeElement, 'input');fixture.detectChanges();//  view -> modelexpecconst fixture = initTest(FormArrayComp);const cityArray = new FormArray([new FormControl('SF'), new FormControl('NY')]);const form = new FormGroup({cities: cityArray});fixture.componentInstance.form = form;fixture.componentInstance.cityArray = cityArray;fixture.detectChanges();ciexpect(inputs[2].nativeElement.value).toEqual('LA');expect(form.value).toEqual({cities: ['SF', 'NY', 'LA']});  });  it('should support const cityArray = new FormArray([  new FormGroup({town: new FormControl('SF'), state: new]);const form = new FormGroup({cities: cityArray});fixture.componentInstance.fixture.detectChanges();const inputs = fixture.debugexpect(inputs[1].nativeElement.value).toEqual('CA');expect(inputs[2].nativeElement.value).toEqual('NY');expect(inputs[3].nativeElement.value).toEqual('NY');exp});inputs[0].nativeElement.value = 'LA';dispatchEvent(inputs[0].nativeElement, 'input');fixture.detectChanges();expect(form.value).toEqual({  cities: [{town: 'LA', state: 'CA'}, {town: 'NY', state: 'NY'}]});  });});describe('programmatic changes', () => {  it('should update the vaconst login = new FormControl('oldValue');const form = new FormGroup({'login': login});fixture.componentInstance.form = form;fixture.detectChanges();login.setValue('newValue');fixture.detectChanges();const input = fixture.debugElement.query(By.css('input'));expect(input.nativeElementit('should add disabled attribute to an individual control when instantiated as disabled',   () => { const fixture = initTest(FormControlComp); fixture.componentInstance.control = control; fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')); expect(input.nativeElemen expect(input.nativeElement.disabled).toBe(false);  const fixture = initTest(FormGroupComp);  const control = new FormControl({value: 'some value', disabled: true});  fixture.componentInstance.form = new FormGroup({login: control});  fixture.componentInstance.control = control;  f  fixture.detectChanges();  expect(input.nativeElement.disabled).toBe(false);});it('should add disabled attribute to an individual control when disable() is called',   () => { const fixture = initTest(FormControlComp); const control = new FormControl('some value'); fixture.componentInstance fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')); expect(input.nativeElement.disabled).toBe(true); control.enable(); fixture.detectChanges();   });it('should add disabled attribute to child controls when disable() is called on group',   () => { const form = new FormGroup({'login': new FormControl('login')}); fixture.componentInstance.form = form; fixture.detectChanges();  expect(inputs[0].nativeElement.disabled).toBe(t expect(inputs[0].nativeElement.disabled).toBe(false);   });it('should not add disabled attribute to custom controls when disable() is called', () => {  c  fixture.componentInstance.form = new FormGroup({login: control});  fixture.detectChanges();  control.disable();  fixture.detectChanges();  const input = fixture.debugElement.query(By.css('my-input'));  expect(input.nativeElement.getAttribute('disabled')).toBe(null);});  });  describe('dynamic change of FormGroup and FormArray shapes', () => {it('should handle FormControl and FormGroup swap', () => {  @Component({  <form [formGroup]="form"><input formControlName="name" id="standalone-id" *ngIf="!showAsGroup"><ng-container formGroupName="name" *ngIf="showAsGroup">  <input formControlName="control" id="inside-group-id"></ng-container>`  })showAsGroup = false;form!: FormGroup;useStandaloneControl() {  this.showAsGroup = false;name: new FormControl('standalone'),  });}useControlInsideGroup() {  this.showAsGroup = true;name: new FormGroup({})  });  }  const fixture = initTest(App);  fixture.componentInstance.useStandaloneControl();  fixture.detectChanges();  let input = fixture.nativeElement.querySelector('input');  expect(input.id).toBe('s  // in data model and trigger change detecti  fixture.detectChanges();  input = fixture.nativeElement.querySelector('input');  expect(input.id).toBe('i  // in data model and trigger change detection.  fixture.componentInstance.useStandaloneControl();  f  expect(input.value).toBe('standalone');});it('should handle FormControl and FormArray swap', () => {  @Component({template: `  <form [formGroup]="form"><input formControlName="name" id="standalone-id" *ngIf="!showAsArray"><ng-container formArrayName="name" *ngIf="showAsArray">  <input formControlName="  </form>`  })class App { showAsArray = false;   this.showAsArray = false;   this.form = new FormGro   }); } useControlInsideArray() {    name: new FormArray([   new FormControl('inside-array')  // ])   }); }}const fixture = initTest(App);fixture.componentInstance.expect(input.id).toBe('standalone-id');expect(input.value).toBe('standalone');// Replace `FormControl` with `FormArray` at the same location// in data model and trigger change detection.fixture.componentInstance.expect(input.id).toBe('inside-array-id');expect(input.value).toBe('fixture.componentInstance.useStandaloneControl();fixture.detectChanges();input = fixture.nativeElement.querySelector('input');expect(input.id).toBe('standalone-id');expect(input.value).toBe('standalone');@Component({ template: `   <form [formGroup]="form"> <ng-container formGroupNa </ng-container>   <input formControlName="0" id="inside-array-id"> </ng-container> `})class App { sh   this.showAsArray = false;   this.form = new FormGroup({ name: new FormGroup({   control: new FormControl('inside-group'), })   }); } useControlInsideArray() {   this.showAsArray = tr name: new FormArray([ ])   }); }}const fixture = initTest(App);fixture.detectChanges();let input = fixture.nativeElement.querySelector('input');expect(input.id).toBe('inside-group-id');expect(input.value).toBefixture.componentInstance.useControlInsideArray();fixture.detectChanges();input = fixture.nativeElement.querySelector('input');expec// in data model and trigger change detection.fixture.componentInstance.useControlInsideGroup();fixture.detectChanges();input = fixture.nativeElement.querySelector('input');expect(input.id).toBe('inside-group-id');expect(input.value).toBe('inside-group');  });});it('should mark controls as touched after interacting with the DOM control', () => {  const fixture = initTe  const form = new FormGroup({'login': login});  fixture.componentInstance.form = form;  fixture.detectChanges();  const loginEl = fixture.debugElement.query(By.css('input'));  exp    });    describe('submit and reset events', () => {it('should emit ngSubmit event with the original submit event on submit', () => {  const fixture = initTest(FormGroupComp);  fixture.componentInstance.form = new FormGroup({'login': new FormControl('loginValue')});  fixture.componentInstance.event = null!;  fixture.detectChanges();  const formEl = fixture.debugElement.query(By.css('form')).nativeElement;  dispatchEvent(formEl, 'submit');  fixture.detectChanges();  expect(fixture.componentInstance.event.type).toEqual('submit');});it('should mark formGroup as submitted on submit event', () => {  const fixture = initTe  fixture.detectChanges();  const formGroupDir = fixture.debugElement.children[0].injector.get(FormGroupDirective);  expect(formGroupDir.submitted).toBe(false);  const formEl = fixture.debugElement.query(By.css('form')).nativeElement;  dispatchEvent(formEl, 'submit');  fixture.detectChanges();  expect(formGroupDir.submitted).toEqual(true);});it('should set value in UI when form resets to that value programmatically', () => {  const fixture = initTest(FormGroupComp);  const login = new FormControl('some value');  c  fixture.detectChanges();  const loginEl = fixture.debugElement.query(By.css('input')).nativeElement;  expect(loginEl.value).toBe('some value');  form.reset({'login': 'reset value'});  expect(loginEl.value).  const fixture = initTest(FormGroupComp);  const login = new FormControl('some value');  const form = new FormGroup({'login': login});  fixture.componentInstance.form = form;  f  expect(loginEl.value).toBe('');});    });    describe('value changes and status changes', () => {it('should mark controls as dirty before emitting a value change event', () => {  const fixture = initTest(FormGroupComp);  const login = new FormControl('oldValue');  fixture.componentInstaexpect(login.dirty).toBe(true);  });  const loginEl = f});it('should mark control as pristine before emitting a value change event when resetting ',const fixture = initTest(FormGroupComp);const login = new FormControl('oldValue');constfixture.detectChanges();const loginEl = fixture.debugElement.query(By.css('input')).nativeElement;loginEl.value = 'newValue';dispatchEvent(loginEl, 'input');expect(login.pristine).toBe(false);login.valueChanges.subscribe(() => {  expect(login.pristine).toBe(true);});form.reset();    });    describe('setting status classes', () => {it('should not assign status on standalone <form> element', () => {  @Component({template: ` <form></form>  })  class FormComp {  }  const fixture = initReactiveFormsTest(FormComp);  fixt  // reactive directives attached and only ReactiveForms module is used.  expect(sortedClassList(form)).toEqual([]);});it('should not assign status on standalone <form> element with form control inside', () => {  @Component({selector: 'form-comp',template: `   <input type="text" [formControl]="control"> </form>  })  class FormComp {control = new FormControl('abc');  }  fixture.detectChanges();  const form = fixture.debugElement.query(By.css('form')).nativeElement;  // Expect no classes added to the <form> element since it has no  // reactive directives attached and only ReactiveForms module is used.  expect(sortedClassList(form)).toEqual([]);  const input = fixture.debugElement.query(By.css('input')).nativeElement;  expect(sortedClassList(input)).toEqual(['ng-pristine', 'ng-untouched', 'ng-valid']);});it('should work with s  const control = new FormControl('', Validators.required);  fixture.componentInstan  expect(sortedClassList(input)).toEqual(['ng-invalid', 'ng-pristine', 'ng-untouched']);  dispatchEvent(input, 'blur');  fixture.detectChanges();  expect(sortedClassLis  fixture.detectChanges();  expect(sortedClassList(input)).toEqual(['ng-dirty', 'ng-touched', 'ng-valid']);});it('should work with single fields and async validators', fakeAsync(() => {const fixture = initTest(FormControlComp);const fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;expect(sortedClassList(input)).toEqual(['ng-pending', 'ng-pristine', 'ng-untouched']);dispatchEvent(input, 'blur');fixture.detectChanges();expect(sortedClassList(input)).toEqual(['ng-pending', 'ng-pristine', 'ng-touched']);input.value = 'good';dispatchEvent(input, 'input');tick();it('should work with single fields that combines async and sync validators', fakeAsync(() => {const fixture = initTest(new FormControl('', Validators.required, uniqLoginAsyncValidator('good'));fixture.debugElement.componentInstance.control = contexpect(sortedClassList(input)).toEqual(['ng-invalid', 'ng-pristine', 'ng-untouched']);dispatchEvent(input, 'blur');fixture.detectChanges();expect(sortedClassList(input)).toEqual(['ng-invalid', 'ng-pristine', 'ng-touched']);input.value = 'bad';dispatfixture.detectChanges();expect(sortedClassList(input)).toEqual(['ng-dirty', 'ng-invalid', 'ng-touched']);input.value = 'good';dispatchEvent(input, 'input');tick();fixture.detectChanges();expect(sortedClassList(input)).toEqual(['ng-dirty', 'ng-touched', 'ng-valid']);it('should work with single fields in parent forms', () => {  const fixture = initTest  fixture.componentInstance.form = form;  fixture.detectChanges();  fixture.detectChanges();  expect(sortedClassList(input)).toEqual(['ng-invalid', 'ng-pristine', 'ng-touched']);  input.value = 'updatedValue';  dispatchEvent(input, 'input');  fixture.detectChanges();  expect(sortedClassList(input)).toEqual(['ng-dirty', 'ng-touched', 'ng-valid']);  exp  expect(sortedClassList(formEl)).toContain('ng-submitted');  dispatchEvent(formEl, 'reset');  fixture.detectChanges();  expect(sortedClassList(input)).not.toContain('ng-submitted');  expect(sortedClassList(formEl)).not.toContain('ng-submitted');});it('should work with formGroup', () => {  const fixture = initTest(FormGroupComp);  const form = new FormGroup({'login': new FormControl('', Validators.required)});  fixture.componentInstance.form = form;  fixture.detectChanges();  const input = fixture.debugElement.query(By.css('input')).nativeElement;  const formEl = fixture.debugElement.query(By.css('form')).nativeElement;  expect(sortedClassList(formEl)).toEqual(['ng-invalid', 'ng-pristine', 'ng-untouched']);  dispatchEvent(input, 'blur');  fixture.detectChanges();  expect(sortedClassList(formEl)).toEqual(['ng-invalid', 'ng-pristine', 'ng-touched']);  input.value = 'updatedValue';  dispatchEvent(input, 'input');  fixture.detectChanges();  expect(sortedClassList(formEl)).toEqual(['ng-dirty', 'ng-touched', 'ng-valid']);  dispatchEvent(formEl, 'submit');  fixture.detectChanges();  expect(sortedClassList(formEl)).toContain('ng-submitted');  dispatchEvent(formEl, 'reset');  fixture.detectChanges();  expect(sortedClassList(input)).not.toContain('ng-submitted');  expect(sortedCl  // Since element with the `formArrayName` can not represent top-level forms (can only be  // inside other elements), this test verifies that these elements never receive  // `ng-submitted` CSS class even when they are located inside submitted form.  const fixture = initTest(FormArrayComp);  const cityArray = new FormArray([new FormControl('SF'), new FormControl('NY')]);   fixture.componentInstance.cityArray = cityArray;  fixture.detectChanges();  const [loginInput, passwordInput] = fixture.debugElement.queryAll(By.css('input')).map(el => el.nativeElement);  const arrEl = fixture.debugElement.query(By.css('div')).nativeElement;  const formEl = fixture.debugElement.query(By.css('form')).nativeElement;  expect(passwordInput).toBeDefined();  expect(sortedClassList(loginInput)).not.toContain('ng-submitted');  expect(sortedClassList(arrEl)).not.toContain('ng-submitted');  expect(sortedClassList(formEl)).not.toContain('ng-submitted');  dispatchEvent(formEl, 'submit');  f  expect(sortedClassList(formEl)).toContain('ng-submitted');  dispatchEvent(formEl, 'reset');  fixture.detectChanges();  expect(sortedClassList(loginInput)).not.toContain('ng-submitted');  expect(sortedClassList(a});it('should apply submitted status with nested formArrayName', () => {  const fixture = initTest(NestedFormArrayNameComp);  const ic = new FormControl('foo');  const form = new FormGroup({arr});  fixture.componentInstance.form = form;  fixture.detectChanges();  const input = fixture.debugElement.query(By.css('input')).nativeElement;  const arrEl = fixture.de  expect(sortedClassList(arrEl)).not.toContain('ng-submitted');  expect(sortedClassList(formEl)).not.toContain('ng-submitted');  dispatchEvent(formEl, 'submit');  fixture.detectChanges();  expect(sortedCl  expect(sortedClassList(formEl)).toContain('ng-submitted');  dispatchEvent(formEl, 'reset');  fixture.detectChanges();  expect(sortedClassList(input)).not.toContain('ng-submitted');  expect(sortedClassList(arrEl)).not.toContain('ng-submitted');  expect(sortedClassList(f  const fixture = initTest(NestedFormGroupNameComp);  const loginControl = new FormControl('', {validators: Validators.required, updateOn: 'change'});  c {signin: new FormGroup({login: loginControl, password: passwordControl})}, {updateOn: 'blur'});  fixture.componentInstance.form = formGroup;  fixture.detectChanges();  const [loginInput, passwordInput] = fixture.debugElement.queryAll(By.css('input')).map(el => el.nativeElement);  const formEl = fixture.debugElement.query(By.css('form')).nativeElement;  const groupEl = fixture.debugElement.query(By.css('div')).nativeElement;  loginInput.value = 'Nancy';  // Input and blur events, as in a real interaction, cause the form to be touched and  // dirtied.  dispatchEvent(loginInput, 'input');  dispatchEvent(loginInput, 'blur');  fixture.detectChanges();  expect(sortedClassList(loginInput)).not.toContain('ng-submitted');  expect(sortedClassList(groupEl)).not.toContain('ng-submitted');  expect(sortedCla  expect(sortedClassList(groupEl)).not.toContain('ng-submitted');  expect(sortedClassList(formEl)).toContain('ng-submitted');  dispatchEvent(formEl, 'reset');  fixture.detectChanges();  expect(sortedClassList(loginInput)).not.toContain('ng-submitted');  expect(sortedClassList(groupEl)).not.toContain('ng-submitted');  expect(sortedClassList(formEl)).not.toContain('ng-submitted');})describe('on blur', () => {  it('should not update value or validity based on user input until blur', () => {const fixture = initTest(FormControlComp);const control = new FormControl('', {validators: Validators.required, updateOn: 'blur'});fixture.componentInstance.control = control;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';dispatchEvent(input, 'input');f   .toEqual('');expect(control.valid)   .withContext('Expectefixture.detectChanges();expect(control.value)   .withContext('Expected value to change once control is blurred.')   .toEqual('Nancy');   .withContext('Expected validation to run once control is blurred.')   .toBe(true);  });  it('should not update parent group value/validity from child until blur', () => {const fixture = initTest   {login: new FormControl('', {validators: Validators.required, updateOn: 'blur'})});fixture.componentInstance.form = form;fixture.detectChanges();const input = fixdispatchEvent(input, 'input');fixture.detectChanges();expect(form.value)   .withContext('Expected group value to remain unchanged until blur.')   .toEqual({login: ''})   .withContext('Expected no validation to occur on group until blur.')   .toBe(false);dispatchEvent(input, 'blur');fixture.detectChanges();expect(form.value)   .wexpect(form.valid)   .withContext('Expected validation to run once input blurred.')   .toBe(true);  });  it('should not wait for blur event to update if value is set programmatically', () => {const fixture = initTest(FormControlComp);const control = new FormControl('', {validators: Validators.required, updateOn: 'blur'});fixture.componentInstance.control = control;fixture.detectChanges();control.setValue('Nancy');fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;expect(input.value)   .withContext('Expected value to propagate to view immediately.')   .toEqual('Nancy');expect(control.value)   .withContext('Expected model value to update immediately.')   .toEqual('Nancy');expect(control.valconst fixture = initTest(FormControlComp);const control = new FormControl('', {updateOn: 'blur'});fixture.componentInstance.control = control;fixture.detectChanges();expect(control.dirty).withContext('Expected control to start out pristine.').toBe(false);const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';dispatchEvent(input, 'input');fixture.detectChanges();expect(control.dirty)  fixture.detectChanges();expect(control.dirty)   .withContext('Expected control to update dirty state when blurred.')   .toBe(true);  });  it('should update touched when control is blurred', () => {const fixture = initTest(FormControlComp);const control = new FormControl('', {updateOn: 'blur'});fixture.componentInstance.control = control;fixture.detectChanges();expect(control.touched) dispatchEvent(input, 'blur');fixture.detectChanges();expect(control.touched)   .withContext('Expecte  });  it('should continue waiting for blur to update if previously blurred', () => {const fixture = initTest(FormControlComp);const control =fixture.componentInstance.control = control;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;dispatchEvent(input, 'blur');fixture.detectChanges();dispatchEvent(input, 'input');fixture.detectChanges();expect(control.value)   .withContext('Expected value to remainexpect(control.valid)   .withContext('Expected validation not to run until second blur.')   .toBe(true);dispatchEvent(input, 'blur');fixture.detectChanges();   .toEqual('');expect(control.valid)   .withContext('Expected validation to run when blur occurs again.')   .toBe(false);  });  it('should not use stale pending value if value set programmatically', () => {const ffixture.componentInstance.control = control;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'aa';dispatchEvent(input, 'input');fixture.detectChanges();control.setValue('Nancy');fixture.detectChanges();dispatchEvent(input, 'blur');fixture.detectChanges();ex   .toEqual('Nancy');  });  it('should set initial value const control =fixture.componentInstance.control = control;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;expect(input.value).withContext('Expected value to be set in the view.').toEqual('Nancy');expect(   .toEqual('Nancy');expect(control.valid)   .withContext('Expected validation to run on initial value.')   .toBe(false);  });  it('should reset properly', () => {const fixture = initTest(Ffixture.componentInstance.control = control;fixture.detectChanges();const inpudispatchEvent(input, 'input');fixture.detectChanges();dispatchEvent(input, 'blur');fixfixture.detectChanges();expect(input.value).withContext('Expected view value to reset').toEqual('');expect(control.value).withContext('Expected pending value to reset.').toBe(null);expect(control.dirty).withContext('Expected pending dirty value to reset.').toBe(false);  });  it('should be able  template: `   <form [formGroup]="form"> <input formControlName="surname">   </form>})class App implements OnDestroy { pr   surname: new FormControl('Baggins'), }); constructor() {   this._subscription = this.form.controls['name'].valueChanges.subscribe(value => { if (!value) {   this.form.removeControl('surname'); } } ngOnDestroy() {   this._subscription.unsubscribe();}const fixture = initTest(App);fixture.detectChanges();exp fixture.detectChanges();}).not.toThrow();expect(fixture.componentInstance.form.value).toEqual({name: null});  });  it('should not emit valueChanges or statusChanges until blur', () => {const fixture = initTest(FormControlComp);const control: FormControl =   new FormControl('', {vafixture.detectChanges();const values: string[] = [];const sub =input.value = 'Nancy';dispatchEvent(input, 'input');fixture.detectChanges();expect(values)   .witfixture.detectChanges();expect(values).withContext('Expected valueChanges and statusChanges on blur.').toEqual([ 'Nancy', 'VALID']);sub.unsubscribe();  });  it('should not emit valueChanges or statusChanges on blur if value unchanged', () => {const fixture = initTest(FormControlComp);const control: FormControlfixture.componentInstance.control = control;fixture.detectChanges();constdispatchEvent(input, 'blur');fixture.detectChanges();   .withContext('Expected no valueChanges or statusChanges if value unchanged.')   fixture.detectChanges();   .withContext('Expected no valueChanges or statusChanges on input.')   .toEqual([]);dispatchEvent(input, 'blur');fixture.detectChanges();expect(values).toEqual(   ['Nancy', 'VALID'],fixture.detectChanges();expect(values).toEqual(   ['Nancy', 'VALID'],dispatchEvent(input, 'input');expect(values).toEqual(   ['Nancy', 'VALID'],   expect(values   'Expconst fixture = initTest(FormControlComp);const control = new FormControl('', {updateOn: 'blur'});fixture.componentInstance.control = control;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'aa';dispatchEvent(input, 'input');fixture.detectChanges();dispatchEvent(input, 'blur');fixture.detectChanges();control.markAsPristine();expect(control.dirty).withContext('Expected control to become pristine.').toBe(false);dispatchEvent(input, 'blur');fixconst fixture = initTest(FormGroupComp);const control = new FormCofixture.componentInstance.form = formGroup;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';dispatchEvent(input, 'input');fix   .toEqual('');expect(control.valid)   .withContext('Expected no validation to occur until blur.')   .toBe(false);dispatchEvent(input, 'blur');fixture.detectChanges();expect(control.value)   .withContext('Expected value to change once control is blurred.')   .toEqual('Nancy');expect(control.valid)   .withContext('Expected validation to run once control is blurred.')   .toBe(true);  });  it('should update on blur with array updateOn', () => {const fixture = initTest(FormArrayComp);const control = new FormControl('', Validators.required);const cityArray = new Formfixture.componentInstance.form = formGroup;fixture.componentInstance.cityArray = cityArray;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';fixture.detectChanges();expect(control.value)   .withContext('Expected value to remain unchanged until blur.')      .withContext('Expected no validation to occur until blur.')   .toBe(false);dispatchEvent(input, 'blur');fixture.detectChanges();expect(control.value)   .withContext('Expected value to change once control is blurred.')   .toEqual('Nancy');   .withContext('Expected validation to run once control is blurred.')   .toBe(true);  it('should allow child control updateOn blur to override group updateOn', () => {const fixture = initTest(N   new FormControl('', {validators: Validators.required, updateOn: 'change'});const formGroup = new FormGroup(   {signin: new FormGroup({login: loginControl, password: passwordControl})},   {updateOn: 'blur'});fixture.detectChanges();const [loginInput, passwordInput] = fixture.debugElement.queryAll(By.css('input'));logfixture.detectChanges();expect(loginControl.value)   .withContext('Expected value change on input.')   .toEqual('Nancy');expect(loginControl.valid).withContext('Expected validation to run on input.').toBe(true);passwordInput.nativeElement.value = 'Carson';dispatchEvent(passwordIn   .withContext('Expected value to remain unchanged until blur.')   .toEqual('');   .withContext('Expected no validation to occur until blur.')   .toBe(false);dispatchEvent(passwordInput.nativeElement, 'blur');fixture.detectChanges();expect(passwordControl.value)   .toEqual('Carson');expect(passwordControl.valid)   .withContext('Expected validation to run once control is blurred.')   .toBe(true);});describe('on submit', () => {const fixture = initTest(FormGroupComp);const form = new FormGroup({ login: new FormControl('Nancy', {validators: Validators.required, updateOn: 'submit'})});fixture.componentInstance.form = form;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;expect(input.value)   .toEqual('Nancy');expect(form.value).withContext('Expected initial value to be set.').toEqual({});expect(form.valid)   .withContext('Expected form to run validation on initial value.')  });  it('should not update value or validity until submit', () => {const fixture = initTest(FormGroupComp);const formGroup = new Fofixture.componentInstance.form = formGroup;input.value = 'Nancy';dispatchEvent(input, 'in   .withContext('Expected form value to remain unchanged on input.')expect(formGroup.valid)   .withContext('Expected form validation not to run on input.')   .toBe(false);dispatchEvent(input, 'blur');fixture.detectChanges();   .toEqual({login: ''});   .withContext('Expected form validation not to run on blur.')   .toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();expect(formGroup.value).withContext('Expected form value to update on submit.').toEqual({ login: 'Nancy'});   .withContext('Expected form validation to run on submit.')   .toBe(true);const fixture = initTest(FormGroupComp);   {login: new FormControl('', {validators: Validators.required, updateOn: 'submit'})});fixture.componentInstance.input.value = 'Nancy';fixture.detectChanges();const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();infixture.detectChanges();expect(formGroup.value)   .withContext('Expected value not to change until a second subexpect(formGroup.valid)   .withContext('Expected fixture.detectChanges();expect(formGroup.value)   .withContext('Expected value to update on the second submexpect(formGroup.valid)   .withContext('Expected   });  it('should not wait for submit to set value programmatically', () => {const fixture = initTest(FormGroupComp);confixture.componentInstance.form = formGroup;fixture.detectChanges();formGroup.setValue({login: 'Nancy'});fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;expect(input.value)   .withContext('Expected expect(formGroup.value)   .withContext('Expected form value to update immediately.')expect(formGroup.valid)   .toBe(true);  });  it('should not updaconst formGroup = new FormGroup({login: new FormControl('', {updateOn: 'submit'})});fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;dispatchEvent(input, 'input');fixture.detectChanges();exdispatchEvent(form, 'submit');  });  it('should not update touched until submit', () => {const fixture = initTest(Ffixture.componentInstance.form = formGroup;dispatchEvent(input, 'blur');fixture.detectChanges();ex   .toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixconst fixture = initTest(FormGroupComp);const formGroup = new FormGroup(   {login: new FormControl('', {validators: Validators.required, updateOn: 'submit'})});fixture.componentInstance.form = formGroup;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';dispatchEvent(input, 'input');fixture.detectChanges();dispatchEvent(input, 'blur');fixture.detectChanges();formGroup.reset();fixture.detectChanges();ex login: null});expect(formGroup.dirty).withContext('Expected dirty to stay false on reset.').toBe(false);expect(formGroup.touched)   .toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();expect(formGroup.value)   .withContext('Expected form value to stay empty on submit')expect(formGroup.dirty)   .withContext('Expected expect(formGroup.touched)   .withContext('Expected touched to stay false on submit.')   .toBe(false);const fixture = initTest(FormGroupComp);const control =const formGroup = new FormGroup({login: control});fixture.componentInstance.form = formGroup;fixture.detectChanges();const values: any[] = [];con   formGroup.statusChanges);const sub = streams.subscribe(val => values.push(val));const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';dispatchEvent(input, 'input');fixture.detectChanges();expect(values)   .withContext('Expected no valueChanges or statusChanges on input')   .toEqual([]);dispatchEv   .withContext('Expected no valueChanges or statusChanges on blur')   .toEqual([]);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');   ['Nancy', 'VALID', {login: 'Nancy'}, 'VALID'],   'Expected valueChanges and statusChanges to update on submit.');sub.unsubscribe();  });  it('should not emit valueChanges or statusChanges on submconst control =   new FormControl('', {vafixture.componentInstance.form = formGroup;fixture.detectChanges();const values: any[] = [];const streams = merge(   formGroup.statusChanges);const sub = streams.subscrfixture.detectChanges();expect(values)   .withContext('Expected no valueChanges or statusChanges if value unchanged.')   dispatchEvent(input, 'input');fixture.detectChanges();expect(values)   .withContext('Expected no valueChanges or statusChanges on input.')   .toEqual([]);dispatchEvent(form, 'submit');fixture.detectChanges();expect(values).toEqual(   ['Nancy', 'VALID', {login: 'Nancy'}, 'VALID'],   'Expected valueChanges and statusChanges on submit if value changed.');dispatchEvent(form, 'submit');fixture.detectChanges();   ['Nancy', 'VALID', {login: 'Nancy'}, 'VALID'],   'Expected valueChanges and statusChanges not to fire again if value unchafixture.detectChanges();expect(values).toEqual(   ['Nancy', 'VALID', {login: 'Nancy'}, 'VALID'],   'Expected valueChanges and statusChanges not to fire on input after submit.');dispatchEvent(form, 'submit');fixture.detectChanges();expect(values).toEqual(   [ 'Nancy', 'VALID', {login: 'Nancy'}, 'VALID', 'Bess', 'VALID', {login: 'Bess'}, 'VALID'   ],  });  it('should not run validation for onChange controls on submit', () => {const validatorSpy = jasmine.createSpy('validator');const groupValidatorSpy = jasmine.createSpy('groupValidatorSpy') signin: new FormGroup({login: new FormControl(), password: new FormControl()}), email: new FormControl(''fixture.componentInstance.form = formGroup;fixture.detectChanges();formGroup.get('signin.login')!.setValidators(validatorSpy);formGroup.get('signin')!.setValidators(groupValidatorSpy);cofixture.detectChanges();expect(validatorSpy).not.toHaveBeenCalled();expect(groupValidatorSpy).const fixture = initTest(FormGroupComp);const formGroup = new FormGroup({login: new FormControl('', {updateOn: 'submit'})});fixture.componentInstance.form = formGroup;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;dispatcfixture.detectChanges();expect(formGroup.touched).withContext('Expected group to become untouched.').toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();expect(formGroup.touched)   .withContext('Expected touched to stay false on submit.')   .toBe(false);  });  it('should update on submit with group updateOn', () => {const fixture = initTestconst formGroup = new FormGroup({login: control}, {updateOn: 'submit'});fixture.componentInstance.form = formGroup;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';fixture.detectChanges();expect(control.value)   .withContext('Expected value to remain unchanged until submit.')   .toEqual('');expect(control.valid)   .withContext('Expected no validation to occur until submit.')   .toBe(false);   .withContext('Expected value to remain unchanged until submit.')   .toEqual('');   .withContext('Expected no validation to occur until submit.')   .toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();expect(control.value).withContext('Expected value to change on submit.').toEqual('Nancy');expect(control.valid).withContext('Expected validation to run on submit.').toBe(true);  });  it('should update on submit with array updateOn', () => {constconst cityArray = new FormArray([control], {updateOn: 'submit'});const formGroup = new FormGroup({cities: cityArray});fixture.componentInstance.form = formGroup;fixture.componentInstance.cityArray = cityArray;fixture.detectChanges();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';fixture.detectChanges();expect(control.value)   .withContext('Expected value to remain unchanged until submit.')   .toEqual('');expect(control.valid)   .toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();expect(control.value)   .withContext('Expected value to change once control on submit')   .toEqual('Nan  });  it('should allow child control updateOn submit to override group updateOn', () => {const fixture = initTest   new FormControl('', {validators: Validators.required, updateOn: 'change'});const passwordControl = new FormControl('', Validators.required);const formGroup = new FormGroup(   {signin: new FormGroup({login: loginControl, password: passwordControl})},   {updateOn: 'submit'});fixture.componentInstance.form = formGroup;fixtudispatchEvent(loginInput.nativeElement, 'input');fixture.detectChanges();expect(loginControl.value)   .withContext('Expected value change on input.')   .toEqual('Nancy');expect(loginControl.valifixture.detectChanges();expect(passwordControl.value)   .withContext('Expecteexpect(passwordControl.valid)   .withContext('Expected no validation to occur until submit.')   .toBe(false);const form = fixture.debugElement.query(By.css('form')).nativeElement;dispatchEvent(form, 'submit');fixture.detectChanges();expect(passwordControl.value)   .withContext('Expected value to change on submit.')   .toEqual('Carson');expect(passwordControl.valid)   .w  });  it('should not prevent the default action on forms with method="dialog"', fakeAsync(() => {  if (typeof HTMLDialogElement === 'undefined') {return;  }  const fixture = initTest(NativeDialogForm);  fixture.detectChanges(  const event = dispatchEvent(fixture.componentInstance.form.nativeElement, 'submit');}));});    });    describe('ngModel interactions', () => {let warnSpy: jasmine.Spy  (FormControlDirective as any)._ngModelWarningSentOnce = false;  (FormControlName as any)._ngModelWarningSentOnce = false;  warnSpy = spyOn(console, 'warn');});describe('dep  const fixture = initTest(FormGroupNgModel);  fixture.componentInsta  fixture.detectChanges();  tick();  expect(warnSpy.calls.count()).toEqual(1);  expect(warnSpy.calls.mostRecent().args[0])  .to  fixture.detectChanges();  tick();  expect(warnSpy.calls.count()).toEqual(1);}));  it('should warn once by default when using ngModel with formControl', fakeAsync(() => {  const fixture = initTest(FormControlNgModel);  fixture.componentInsta  fixture.detectChanges();  tick();  expect(warnSpy.calls.count()).toEqual(1);  expect(warnSpy/It looks like you're using ngModel on the same form field as formControl/gi);  fixture.componentInstance.login = 'some value';  fixture.detectChanges();  tick();  expect(warnSpfakeAsync(() => {  TestBed.configureTestingModule({declarations: [FormControlNgModel],impor  fixture.componentInstance.control = new FormControl('');  fixture.componentInstance.passwordControl = new FormControl('');  fixture.detectChanges();  tick();  expect(warnSpy.calls.count()).toEqual(2);  expect(warnSpy.calls.mostRecent().args[0])  .toMatch(}));  it('should silence warnings when global provider is provided with "never"',fakeAsync(() => {  TestBed.configureTestiimports: [ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})]  });  const fixture = TestBed.createComponent(FormControlNgModel);  fixture.componentInstance.control = new FormControl('');  fixture.componentInsta  tick();  expect(warnSpy).not.toHaveBeenCalled();}));});it('should support ngModel for complex forms', fakeAsync(() => {const fixture = initTest(FormGroupNgModel);fixture.componentInstance.form =new FormGroup({fixture.detectChanges();tick();const input = fixdispatchEvent(input, 'input');tick();expect(fixture.componentInstance.login).toEqual('updatedValue');it('should support ngModel for single fields', fakeAsync(() => {const fixture = initTest(FormControlNgModel);fixture.componentInstance.control = new FormControl('');fixture.componentInstance.passwordControl = new FormControl('');fixtutick();const input = fixture.debugElement.query(By.css('input')).nativeElement;expect(input.value).toEqual('oldValue');input.value = 'updatedValue';dispatchEvent(input, 'input');tick();expect(fixture.componentInstance.login).toEqual('updatedValue');it('should not update thconst fixture = initTest(FormControlNgModel);fixture.componentInstance.control = new FormControl('');fixture.componentInstance.passwordControl = new FormControl('');fixture.detectChanges();input.value = 'aa';input.setSelectionRange(tick();// selection start has not changed because we did not reset the valueexpect(input.selectionStconst fixture = initTest(FormGroupNgModel);const formGroup = new FormGroup({login: new FormControl('', {updateOn: 'submit'}), password: new FormControl('')});fixtufixture.detectChanges();tick();const input = fixture.debugElement.query(By.css('input')).nativeElement;input.value = 'Nancy';dispatchEvent(input, 'input');fixture.detectChanges();tick();expect(fixture.co.toEqual('initial');const form = fixture.debugElement.query(By.css('formfixture.detectChanges();tick();expect(fixture.componentInstance.login).withContext('Expected ngModel value to update on submit.').toEqual('Nancy');    });    describe('validations', () => {it('required validator should validate checkbox', () => {  const fixture = initTest(FormControlCheckboxRequiredValidator);  const control = new FormControl(false, Validators.requiredTrue);  fix  expect(checkbox.nativeElement.checked).toBe(false);  expect(control.hasError('required')).toEqual(true);  checkbox.nativeElement.checked = true;  dispatchEvent(checkbox.nativeElement, 'change');  fixture.detectChanges();  expect(checkbox.nativeElement.checked).toBe(true);  expect(control.hasErro  fixture.detectChanges();  expect(checkbox.nativeElement.checked).toBe(true);  expect(control.hasError('required')).toEqual(false);  checkbox.nativeElement.checked = false;  checkbox.nativeElement.required = true;  dispatchEvent(checkbox  expect(control.hasError('required')).toEqual(true);});// Note: this scenario goes against validator function rules were `null` is the only// representation of a successful check. However the `Validators.combine` has a side-e// The goal of t// instead.it('should treat validat  const validatorFn = (control: AbstractControl) => control.value ?? undefined;  const control = new FormControl(undefined, validatorFn);  fixture.componentInstance.control = control;  fix});it('should use sync validators defined in html', () => {  const fixture = initTest(LoginIsEmptyWrapper, LoginIsEmptyValidator);  const form = new FormGroup({'login': new FormControl(''),'min': new FormControl(''),'max': new FormControl(''),'pattern': new FormControl('')  });  fixture.componentInstance.form = form;  fixture.detectChanges();  const required = fixture.debugElement.query(By.css('[required]'));  const minLength = fixture.debugElem  const pattern = fixture.debugElement.query(By.css('[pattern]'));  required.nativeElement.value = '';  minLength.nativeElement.value = '1';  maxLength.nativeElement.value = '1234';  pa  dispatchEvent(maxLength.nativeElement, 'input');  dispatchEvent(pattern.nativeElement, 'input');  expect(form.hasError('required', ['login'])).toEqual(true);  expect(form.hasError('minlength', ['min'])).toEqual(true);  expect(form.hasError('maxlength', ['max'])).toEqual(true);  expect(form.hasError('pattern', ['pattern'])).toEqual(true);  expect(form.hasError('loginIsEmpty')).toEqual(true);  required.nativeElement.value = '1';    pattern.nativeElement.value = '123';  dispatchEvent(required.nativeElement, 'input');  dispatchEvent(minLength.nativeElement, 'input');  dispatchEvent(maxLength.nativeElement, 'input');   const fixture = initTest(ValidationBindingsForm);  const form = new FormGroup({'login': new FormControl(''),'max': new FormControl(''),'pattern': new FormControl('')  });  fixture.compone  fixture.componentInstance.minLen = 3;  fix  fixture.detectChanges();  const required = fixture.debugElement.query(By.css('[name=required]'));  const minLength = fixture.debugElement.query(By.css('[name=minlength]'));  const maxLength = fixture.debugElement.query(By.css('[name=maxlength]'));  const pattern = fixture.debugElement.query(By.css('[name=pattern]'));  required.nativeElement.value = '';  minLength.nativeElement.value = '1';  maxLength.nativeElement.value = '1234';  pattern.nativeElement.valu  dispatchEvent(maxLength.nativeElement, 'input');  dispatchEvent(pattern.nativeElement, 'input');  expect(form.hasError('required', ['logi  expect(form.hasError('maxlength', ['max'])).toEqual(true);  expect(form.hasError('pattern', ['pattern'])).toEqual(true);  required.nativeElement.value = '1';  minLength.nativeElement.value = '123';  maxLength.nativeElemen  dispatchEvent(minLength.nativeElement, 'input');  dispatchEvent(maxLength.nativeElement, 'input');  dispatchEvent(  const fixture = initTest(ValidationBindingsForm);  const form = new FormG'min': new FormControl(''),'max': new FormControl(''),'pa  fixture.componentInstance.form = form;  fix  const maxLength = fixture.debugElement.query(By.css('[name=maxlength]'));  const pattern = fixture.debugElement.query(By.css('[name=pattern]'));  required.nativeElement.value = '';  minLength.nativeElement.value = '1';  maxLength.nativeElement.value = '1234';  pattern.nativeElement.value = '12';  dispatchEvent(required.nativeElement, 'input');  dispatchEvent(minLength.nativeElement, 'input');  dispatchEvent(maxLength.na  expect(form.hasError('minlength', ['min'])).toEqual(false);  expect(form.hasError('maxlength', ['max'])).toEqual(false);  expect(form.valid).toEqual(true);  fixture.componentInstance.required = true;  fixture.componentInstance.minLen = 3;  fixture.componentInstance.maxLen = 3;  fixture.componentInstance.pattern = '.{3,}';  fixture.detectChanges();  dispatchEvent(required.nativeElement, 'input');  dispatchEvent(  dispatchEvent(pattern.nativeElement, 'input');  expect(form.hasError('required', ['login'])).toEqual(true);  expect(form.hasError('minlength', ['min'])).toEqual(true);  expect(form.hasError('maxlength', ['max'])).toEqual(true);  expect(form.hasError('pattern', ['pattern'])).toEqual(true);  expect(form.valid).toEqual(false);  expect(required.nativeElement.getAttribute('required')).toEqual('');  expect(fixture  expect(fixture.componentInstance.maxLen.toString()) .toEqual(maxLength.nativeElement.getAttribute('maxlength'));  expect(fixture.componentInstance.pattern.toString()) .toEqual(pattern.nativeElement.getAttribute('pattern'));  fixture.componentInstance.required = false;  fixture.componentInstance.minLen = null!;  fixture.componentInstance.pattern = null!;  fixture.detectChanges();  expect(form.hasError('required', ['login'])).toEqual(false);  expect(form.hasError('minlength', ['min'])).toEqual(false);  expect(form.hasError('maxlength', ['max'])).toEqual(false);  expect(form.hasError('pattern', ['pattern'])).toEqual(false);  expect(required.nativeElement.getAttribute('minlength')).toEqual(null);  expect(required.nativeElement.getAttribute('maxlength')).toEqual(null);  expect(required.nativeElement.getAttribute('pattern')).toEqual(null);});it('should support rebound controls with rebound validators', () => {  const fixture = initTest(ValidationBindingsForm);  const form = new FormGroup({'min': new FormControl(''),'max': new FormControl(''),'pattern': new FormControl('')  });  fixture.componentInstance.form = form;  fixture.componentInstance.minLen = 3;  fix  fixture.detectChanges();  const newForm = new FormGroup({'login': new FormControl(''),'min': new FormControl(''),'max': new FormControl(''),'pattern': new FormContr  fixture.componentInstance.form = newForm;  fixture.detectChanges();  fixture.componentInstance.required = false;  fixture.componentInstance.minLen = null!;  fixture.componentInsta  fixture.detectChanges();  expect(newForm.hasError('required', ['login'])).toEqual(false);  expect(newForm.hasErro  expect(newForm.hasError('pattern', ['pattern'])).toEqual(false);  expect(newForm.valid).toEqual(true);const fixture = initTest(UniqLoginWrapper, UniqLoginValidator);const form = new FormGrofixture.componentInstance.form = form;fixtuinput.nativeElement.value = 'expected';dispatchEvent(input.nativeElement, 'input');tick(100);expect(form.valid).toEqual(true);it('should use sync validators defined in the model', () => {  const fixture = initTest(FormGroupComp);  const form = new FormG  fixture.detectChanges();  expect(form.valid).toEqual(true);  const input = fixture.debugElement.query(By.css('input'));  input.nativeElement.value = '';  dispatchEvent(input.naconst fixture = initTest(FormGroupComp);const control =new FormControl('', Validators.required, uniqLoginAsyncValidator('expected'));const form = new FormGroup({'login': control});fixture.componentInstance.form = form;fixture.detectChinput.nativeElement.value = 'wrong value';dispatchEvent(input.natidispatchEvent(input.nativeElement, 'input');tick();expect(form.valid).toEqual(true);it('async validator should not override result of sync validator', fakeAsync(() => {const fixture = initTest(FormGroupComp);const control =new FormControl('', Validators.required, uniqLoginAsyncValidator('expected', 100));fixtutick();expect(control.hasError('required')).toEqual(true);const input = fixture.debugElement.query(By.css('input'));input.nativeElement.value = 'expected';dispatchEvent(input.nativeElement, 'input');expect(control.pending).toEqual(true);input.nativeElement.value = '';dispatchEvent(input.nativeElement, 'input');tick(110);expect(control.valid).toEqual(false);it('should handle async validation changes in parent and child controls', fakeAsync(() => {const fixture = initTest(FormGroupComp);const control = new Formconst form = new FormGroup({'login': control}, null,asyncValidator(c => c.get('login')!.value.includes('angular'), 200));fixture.componentInstanctick();// Initially, the form is invalid because the nested mandatory control is emptyexpect(control.hasError('required')).toEqual(true);expect(form.value).toEqual({'login': ''});expect(form.invalid).toEqual(true);// Setting a value in the form control that will trigger the registered asynchronous// validationconst input = fidispatchEvent(input.nativeElement, 'input');// The form control asynchronous validation is in progress (for 100 ms)expect(control.pending).expect(control.invalid).toEqual(false);// Even if the child control is valid, the form control is pending because it is still// waiting for its own validationexpect(form.pending).toEqual(true);tick(100);// Login form control is valid. However, the form control is invalid because `angul` does// not include `angular`expect(control.invalid).toEqual(false);expect(form.pending).toEqual(false);expecdispatchEvent(input.nativeElement, 'input');// Since the form control value changed, its asynchronous validation runs for 100msexpect(control.pending).toEqual(true);tick(100);// Even if the child control is valid, the form control is pending because it is still// waiting for its own validationexpect(control.invalid).toEqual(false);expect(form.pending).toEqual(true);tick(100);// Now, the form is valid because its own asynchronous validation has resolved// successfully, because the form control value `angular` includes the `angular` stringexpect(control.invalid).toEqual(false);expect(form.pending).toEqual(false);expect(form.invalid).toEqual(false);it('should cancel observable properly between validation runs', fakeAsync(() => {const fixture = initTestfixture.componentInstance.control =new FormControl('', null!, observableValidator(resultArr));fixture.detectChanges();tick(100);expect(resultA.toEqual(1);const input = fixture.debugElement.query(By.css('input'));input.nativeElement.value = 'a';dispatchEvent(input.nativeElement, 'input');fixture.detectChanges();input.nativeElement.value = 'aa';fixture.detectChanges();tick(100);expect(resultArr.length).withContext(`Expected odescribe('enabling validators conditionally', () => {  it('should not activate minlength and maxlength validators if input is null', () => {@Component({ selector: 'min-max-length-null', template: ` <form [formGrou </form> `}) control: FormControl = new FormControl(); form: FormGroup = new FormGroup({'control': this.control}); minlen: number|null = null; maxlen: number|null = null;}const fixture = initTest(MinMaxLengthComponent);const control = fixture.componentInstance.control;fixture.detectChanges();const form = fixture.componentInstance.form;con maxlength: number|null;}interface state { isValid: boolean; failedValidator?: string;}const setInputValue = (value: number) => { input.value = value; dispatchEvent(input, 'input'); fixture.detectChanges()const setValidatorValues = (values: minmax) => { fixture.componentInstance.minlen = values.minlength; fixture.componentInstance.maxlen = values.maxlength; fixture.detectChanges();};const verifyValidatorAttrValues = (values: {minlength: any, maxlength: any}) => { expect(input.getAttribute('minlength')).toBe(values.minlength); expect(input.getAttribute('maxlength')).toBe(values.maxlength);};const verifyFormState = (state: state) => { expe   expect(control!.hasError('minlength')).toEqual(state.failedValidator === 'minlength');   expect(control!.hasError('maxlength')).toEqual(state.failedValidator === 'maxlength'); }};////////// Actual test scenarios start below //////////// 1. Verify that validators are disabled when input is `null`.setValidatorValues({minlverifyFormState({isValid: true});// 2. Verify that setting validator inputs (to a value different from `null`) activate// validators.setInputValue(12345);setValidatorValues({minlverifyFormState({isValid: false, failedValidator: 'maxlength'});// 3. Changing value to the valid range should make the form valid.setInputValue(123);verifyFormState({isValid: true});// 4. Changing value to trigger `minlength` validator.setInputValue(1);verifyFormState({isValid: false, failedValidator: 'minlength'});// 5. Changing validator inputs to verify that attribute values are updated (and the form// is now valid)setValidatorValues({minlength: 1, maxlength: 5});verifyValidatorAttrValuesetInputValue(123);setValidatorValues({minlength: null, maxlength: null});verifyValidatorAttrValues({minlength: null, maxlength: null});verifyFormState({isValid: true});  });  it('should not activate min and max validators if input is null', () => {@Component({ template: ` <form [formGroup]="form">   <input type="number" })class MinMaxComponent { control: FormControl = new FormControl(); form: FormGroup = new FormGroup({'control': this.control}); minlen: number|null = null; maxlen: number|null = null;}consfixture.detectChanges();const form = fixture.componentInstance.form;const input = fixture.debugElement.query(By.css('input')).nativeElement;interface minmax { min: number|null; max: number|null;}interface state { isValid: boolean;}const setInputValue = (value: number) => { input.value = value; dispatchEvent(input, 'input'); fixture.detectChanges()const setValidatorValues = (values: minmax) => { fixture.componentInstance.minlen = values.min; fixture.componentInstan};const verifyValidatorAttrValues = (values: {min: any, max: any}) => { expect(input.getAttribu};const verifyFormState = (state: state) => { expect(form.valid).toBe(state.isValid); if (state.failedValidator) {   expect(control!.hasError('min')).toEqual(state.failedValidator === 'min');   expect(contr};////////// Actual test scenarios start below //////////// 1. Verify that validaverifyValidatorAttrValues({min: null, max: null});verifyFormState({isValid: true});// 2. Verify that setting validator inputs (to a value different from `null`) activate// validators.setInputValue(12345);setValidatorValues({min: 2, max: 4});verifyValidatorAttrValues({min: '2', max: '4'});verifverifyFormState({isValid: true});// 4. Changing value to trigger `minlength` validator.setInputValue(1);verifyFormState({isValid: false, failedValidator: 'min'});// 5. Changing validator inputs to verify that attribute values are updated (and the form// is now valid).setInputValue(1);setValidatorValues({min:verifyFormState({isValid: true});// 6. Reset validator inputs back to `null` should deactivate validators.setInputValue(123);verifyValidatorAttrValues({min: null, max: null});verifyFormState({isValid: true});  });});describe('min and max validators', () => {  function getComponent(dir: string): Type<MinMaxFormControlComp|MinMaxFormControlNameComp> {return dir === 'formControl' ? MinMaxFormControlComp : MinMaxFormControlNameComp;  }  // Run tests for both `FormControlName` and `FormControl` directives  ['formControl', 'formControlName'].forEach((dir: string) => {it('should validate max', () => { cons fixture.componentInstance.control = control; fixture.componentInstance.form = new FormGroup({'pin': control}); fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')).nativeElement; const form = fixture.componentInstance.form; expect(input.value).toEqual('5'); expect(form.valid).toBe dispatchEvent(input, 'input'); expect(form.value).toEqual({pin: 2}); expect(form.valid).toBe fixture.detectChanges(); expect(input.getAttribute('max')).toEqual('1'); expect(form.controls['pin'].errors).toEqual({max: {max: 1, actual: 2}}); fixture.componentInstance.min = 0; fixture.componentInstan expect(input.getAttribute('min')).toEqual('0'); expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({max: {max: 0, actual: 2}}); input.value = 0; dispatchEvent(input, 'i expect(form.valid).toBeTruthy(); expe const fixture = initTest(getComponent(dir)); const control = new FormControl(10.25); fixture.componentInstance.control = control; fixture.componentInstance.form = new FormGroup({'pin': control}); fixture.componentInstan const form = fixture.componentInstance.form; expect(input.getAttribute('max')).toEqual('10.35'); expect(input.value).toEqual('10.25'); expect(form.valid).toBe dispatchEvent(input, 'input'); expect(form.value).toEqual({pin: 10.15}); expect(form.val fixture.detectChanges(); expect(input.getAttribute('max')).toEqual('10.05'); expect(form.valid).toBeFalse(); expect(form.controls['p expect(form.value).toEqual({pin: 10.01}); expe});it('should apply max validation when control value is defined as a string', () => { const fixture = initTest(getComponent(dir)); const control = new FormControl('5'); fixture.componentInstance.control = control; fixture.componentInstance.form = new FormGroup({'pin': control}); fixture.detectChanges() expect(form.valid).toBeTruthy(); expect(form.controls['pin'].errors).toBeNull(); input.value = '2'; dispatchEvent(input, 'input'); expect(form.value).toEq expect(form.controls['pin'].errors).toBeNull(); fixture.componentInstance.max = 1; fixture.detectChanges() expect(form.valid).toBeFalse(); expect(form.controls['p const fixture = initTest(getComponent(dir)); const control = new FormControl(5); fixture.componentInstance.control = control; fixture.componentInstance.form = new FormGroup({'pin': control}); fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')).nativeElement; const form = fixture.componentInstance.form; expect(input.value).toEqual('5'); expect(form.valid).toBeTruthy(); expect(form.con expect(form.value).toEqual({pin: 2}); expect(form.valid).toBeTruthy(); expect(form.controls['p expect(input.getAttribute('min')).toEqual('5'); expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({min: {min: 5, actual: 2}}); fixture.componentInstance.min = 0; input.value = -5; dispatchEvent(input, 'input'); fixture.detectChanges(); expect(input.getAttribute('min')).toEqual('0'); expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({min: {min: 0, actual: -5}}); input.value = 0; disp expect(form.valid).toBeTruthy(); expect(form.controls['pin'].errors).toBeNull();});it('should validate min for float number', () => { const fixture = initTest(getComponent(dir)); const control = new FormControl(10.25); fixture.componentInstance.control = control; fixture.componentInstan fixture.componentInstance.min = 10.25; fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')).nativeElement; const form = fixture.componentInstance.form; expect(input.getAttribute('min')).toEqual('10.25'); expect(input.getAttribute('max')).toEqual('10.5'); expect(input.value).toEqual('10.25'); expect(form.controls['pin'].errors).toBeNull(); input.value = 10.35; dispatchEvent(input, 'input'); expect(form.value).toEqual({pin: 10.35}); expect(form.valid).toBe fixture.detectChanges(); expect(input.getAttribute('min')).toEqual('10.4'); expect(form.val dispatchEvent(input, 'input'); expect(form.value).toEq expect(form.controls['pin'].errors).toBeNull();});it('should apply min validation when control value is defined as a string', () => { const fixture = fixture.componentInstance.control = control; fixture.componentInstance.form = new FormGroup({'pin': control}); fixture.detectChanges() expect(form.valid).toBeTruthy(); expect(form.controls['pin'].errors).toBeNull(); input.value = '2'; dispatchEvent(input, 'input'); expect(form.valid).toBeTruthy(); expe expect(input.getAttribute('min')).toEqual('5'); expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({min: {min: 5, actual: 2}});});it('should run min/max validation for empty values', () => { const fixture = initTest(getComponent(dir)); const minValidateFnSpy = spyOn(MinValidator.prototype, 'validate'); const maxValidateFnSpy  fixture.componentInstance.form = new FormGroup({'pin': control}); fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')).nativeElement; const form = fixture.componentInstance.form; expect(input.value).toEqual(''); expect(form.valid).toBeTruthy(); expect(form.controls['pin'].errors).toBeNull(); expect(maxValidateFnSpy).toHaveBeenCalled();});it('should run min/max validation when constraints are represented as strings', () => { const fixture = initTest(getComponent(dir)); const control = new FormControl(5); // Run tests when min and max are defined as strings. fixture.componentInstance.min = '1'; fixture.compone fixture.detectChanges(); const input = fixture.debugElement.query(By.css('input')).nativeElement; const form = fixture.componentInstance.form; expect(input.value).toEqual('5'); expect(form.valid).toBeTruthy(); expect(form.controls['pin'].errors).toBeNull(); input.value = 2;  // inside [1, 10] range dispatchEvent(input, 'input'); expect(form.value).toEqual({pin: 2}); expect(form.val dispatchEvent(input, 'input'); expect(form.value).toEqual({pin: -2}); expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({min: {min: 1, actual: -2}}); input.value = 20;  // outside [1, 10] range dispatchEvent(input, 'input'); expect(form.controls['pin'].errors).toEqual({max: {max: 10, actual: 20}});});it('should run min/max validation for negative values', () => { const fixture = initTest(getComponent(dir)); const control = new FormControl(-30); fixture.componentInstance.control = control; fixture.componentInstance.min = -20; fixture.componentInstance.max = -10; fixture.detectChanges() expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({min: {min: -20, actual: -30}}); input.value = -15; dispatchEvent(input, 'input'); expect(form.valid).toBeTruthy(); expect(form.controls['p expect(form.value).toEqual({pin: -5}); expect(form.valid).toBeFalse(); expect(form.controls['pin'].errors).toEqual({max: {max: -10, actual: -5}}); input.value = 0; dispatchEvent(input, 'input'); expect(form.value).toEqual({pin: 0}); expect(form.valid).toBeFalse();});  });  let registerOnValidatorChangeFired = 0;  let registerOnAsyncValidatorChangeFired = 0;  @Directive({selector: '[ng-noop-validator]',  {provide: NG_VALIDATORS, useExisting: forwardRef(() => NoOpValidator), multi: true}]  })  class NoOpValidator implements Validator {@Input() validatorInput = '';validate(c: AbstractControl) {  return null;}public registerOnValida}  }  @Directive({providers: [{  provide: NG_ASYNC_VALIDATORS,  useExisting: forwardRe}]  })  cla  return Promise.resolve(null);}public registerOnValidatorChange(fn: () => void) {  registerOnAsyncValidatorChangeFired++;}  }  @Component({template: ` <form [formGroup]="fooGroup" ng-noop-validator ng-noop-async-validator [validatorInput]="validatorInput"> <input type="text" form`  })validatorInput = 'bar';fooGroup = new FormGroup({});  }  const fixture = initTest(NgModelNoOpValidation, NoOpValidator, NoOpAsyncValidator);  fixture.detectChanges(  fixture.detectChanges();  // Changing the validator input should not cause the onValidatorChange to be called  // again.  expect(registerOnValidatorChangeFired).toBe(1);  exp});    });    describe('errors', () => {it('should throw if a form isn\'t passed into formGroup', () => {  const fixture = initTest(FormGroupComp);  expect(() => fixture.detectChanges()) .toThrowError(new RegExp(`formGroup expects a FormGroup instance`));});it('should throw if fset: { template: `<input type="text" formControlName="login">  `  });  const fixture = initTest(FormGroupComp);  expect(() => fixture.detectChanges()) .toThrowError( new RegExp(`formControlName must be used with a parent formGroup directive`));});it('should throw if formControlName is used with NgForm', () => {  TestBed.overri template: `<form></form>  `}  });  const fixture = initTest(FormGroupComp);  expect(() => fixture.detectChanges()) .toThrowError(});it('should throw if formControlName is used with NgModelGroup', () => {  TestBed.overrideComponent(FormGroupComp, {set: {<form> <div ngModelGroup="parent">   <i</form>  `}  });  const fixture = initTest(FormGroupComp);  expect(() => fixture.detectChanges()) .toThrowError( new RegExp(`formControlName cannot be used with an ngModelGroup parent.`));});it('should throw if fset: { template: `<div formGroupName="person"> <input type="text" form  `}  });  const fixture = initTest(FormGroupComp);  expect(() => fixture.detectChanges()) .toThrowError( new RegExp(`for  TestBed.overrideComponent(FormGroupComp, {set: { template: `<form>   <input type="text" formControlName="login"> </div></form>  `}  const fixture = initTest(FormGroupComp);  expect(() => fixture.detectChanges()) .toThrowError( new RegExp(`formGroupName must be used with a parent formGroup directive.`));});it('should throw if formArrayName is used without a control container', () => {  TestBed.overrideComponent(FormGroupComp, {set: { template: `ArrayName="cities"><input type="text" formControlName="login">}  }); .toThrowError( new RegExp(`formArrayName must be used with a parent formGroup directive`));});it('should throw if ngModel is used alone under formGroup', () => {  TestBed.overrideCompon template: `mGroup]="form"><input type="text" [(ngModel)]="data">  `}  const fixture = initTest(FormGroupComp);  fixture.componentInstance.form = new FormGroup({});  expect(() => fixture.detectChanges()) .toThrowError(new RegEx});it('should not throw if ngModel is used alone under formGroup with standalone: true', () => {  TestBed.overrideComponent(FormGroupComp, {set: { template: `mGroup]="form"> <input type="te  });  const fixture = initTest(FormGroupComp);  fixture.componentInsta  TestBed.overrideComponent(FormGroupComp, {set: { template: `<div [formGroup]="form"> <div formGroupName="person">   <input type="text" [(ngModel)]="data"> </di  `}  });  c .toThrowError(new RegExp( `ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.`));});it('should throw if ngModelGroup is used with formGroup', () => {  TestBed.overrideComponent(FormGroupComp, {set: {<div [formGroup]="form"> <div ngModelGroup="person">   <input type="text" [(ngModel)]="data"> </div>  `}  const fixture = initTest(FormGroupComp);  fixture.componentInstance.form = new FormGroup({});  expect(() => fixture.detectChanges()) .toThrowError( new RegExp(`ngModelGroup cannot be used with a parent form  TestBed.overrideComponent(FormGroupComp, {set<form [formGroup]="form">hav <input type="radio" formControlName="food" name="drink" value="chicken"></form>`}  });  const fixture = initTest(FormGroupComp);  fixture});    });    describe('radio groups', () => {
it('should respect the attr.disabled state as an initial value', () => {
  const fixture = initTest(RadioForm);  const form = new FormGroup({'choice': choice});
  fixture.componentInstance.form = form;
  fixture  // compatibility. (See `RadioControlValueAccessor` for details.)
  ex  // as expected. Once the initial `disabled` value is setup, the model
  // becomes the source of truth.
  oneInput.nativeElement.setAttribute('disabled', 'false');
  fixture.detectChanges();
  expect(oneInput.attributes['disabled']).toBe('false');
  expect(  expect(oneInput.attributes['disabled']).toBe('true');
  expect(choice.disabled).toBe(false);  oneInput.nativeElement.setAttribute('disabled', 'false');
  fixture.detectChanges();
  expect(oneInput.attributes['disabled']).toBe('false');});
    });    describe('IME events', () => {
it('shoul  fixture.componentInstance.control = new FormControl('oldValue');
  fi  expect(inputNativeEl.value).toEqual('oldValue');  inputEl.triggerEventHandler('compositionstart');  inputNativeEl.value = 'updatedValue';
  dispatchEvent(inputNativeEl, 'input');
  const isAndroid = /android (\d+)/.test(getDOM().getUserAgent().toLowerCase());  if (isAndroid) {
// On Android, values should update immediately
expect(fixture.componentInstance.control.value).toEqual('updatedValue');
  } eexpect(fixture.componentInstance.control.value).toEqual('oldValue');inputEl.triggerEventHandler('compositionend', {target: {value: 'updatedValue'}});
fixture.detectChanges();
expect(fixture.componentInstance.control.value).toEqual('updatedValue');
  }
});it('sh FormControlComp,
 {set: {providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: true}]}});
  const fixture = initTest(FormControlComp);
  fixture.componentInstance.control = new FormControl('oldValue');
  fi  expect(inputNativeEl.value).toEqual('oldValue');  inputEl.triggerEventHandler('compositionstart');  inputNativeEl.value = 'updatedValue';
  dispatchEvent(inputNativeEl, 'input');  // should not update when compositionstart
  expect(fixture.componentInstance.control.value).toEqual('oldValue');  inputEl.triggerEventHandler('compositionend', {target: {value: 'updatedValue'}});  fixture.detectChanges();  // should update when compositionend
  expect(fixture.componentInstance.control.value).toEqual('updatedValue');
});it('should work normally with composition events if composition mode is off', () => {
  Tes {set: {providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: false}]}});
  const fixture = initTest(FormControlComp);
  fixture.componentInstance.control = new FormControl('oldValue');
  fixture.detectChanges();  const inputEl = fixture.debugElement.query(By.css('input'));
  const i  dispatchEvent(inputNativeEl, 'input');
  fixture.detectChanges();  // formControl should update normally
  e    });    describe('cleanup', () => {
// Symbol that indicates to the verification logic that a certain spy was not expected to be
// invoked. This symbol is used by the test helpers below.
const SHOULD_NOT_BE_CALLED = Symbol('SHOULD_NOT_BE_INVOKED');function expectValidatorsToBeCalled(
syncValidatorSpy: jasmine.Spy, asyncValidatorSpy: jasmine.Spy,
expected: {ctx: any, count: number}) {
  [sync expect(call.args[0]).toBe(expected.ctx);
});  });
}function createValidatorSpy()}
function createAsyncValidatorSpy(): jasmine.Spy<jasmine.Func> {}// Sets up a control with validators and value accessors configured for a test.
function addOwnValidatorsAndAttachSpies(control: AbstractControl, fromView: any = {}): void {
  const validatorSpy = createValidatorSpy();
  const asyncValidatorSpy = createAsyncValidatorSpy();
  const valueChangesSpy = jasmine.createSpy('controlValueChangesListener');
  const debug: any = {
validatorSpy,
asyncVa  };
  if (fromView.viewValidators) {debug.viewValidatorSpy = validatorSpyOn(syncValidatorClass);
debug.viewAsyncValidatorSpy = validatorSpyOn(asyncValidatorClass);
  }debug.valueAccessorSpy = spyOn(fromView.valueAccessor.prototype,  (control as any).__debug__ = debug;  control.valueChanges.subscribe(valueChangesSpy);
  control.setValidators(validatorSpy);
  control.setAsyncValidators(asyncValidatorSpy);
}// Resets all spies associated with given controls.
function resetSpies(...controls: AbstractControl[]): void {
  controls.forEach((control: any) => {
const debug = control.__debug__;
debug.vdebug.valueChangesSpy.calls.reset();
if (debug.viewValidatorSpy) {
 debug.viewValidatorSpy.calls.reset();
} debug.viewAsyncValidatorSpy.calls.reset();
} debug.valueAccessorSpy.calls.reset();
}}// Verifies whether spy calls match expectations.
function verifySpyCalls(spy: any, expectedContext: any, expectedCallCount?: number) {
  if (expectedContext === SHOULD_NOT_BE_CALLED) {
expect(spy).not.toHaveBeenCalled();
  } else {
expect(spy).toHaveBeenCalledWith(expectedContext);
if (expectedCallCount !== undefined) {
 expect(spy.calls.count()).toBe(expectedCallCount);
}}// Verify whether all spies attached to a given control match expectations.
function verifySpies(control: AbstractControl, expected: any = {}) {
  const debug = (control as any).__debug__;
  const viewValidatorCallCount = expected.viewValidatorCallCount ?? 1;
  const  verifySpyCalls(debug.validatorSpy, expected.ownValidators, ownValidatorCallCount);
  verifySpyCalls(debug.asyncValidatorSpy, expected.ownValidators, ownValidatorCallCount);
  verifySpyCalls(debverifySpyCalls(debug.viewValidatorSpy, expected.viewValidators, viewValidatorCallCount);
  }
  if (debug.viewAsyncValidatorSpy) {
verifyS  }
  if (debug.valueAccessorSpy) {
verifySpyCalls(deb}// Ini  const fixture = initTest(
 component, ViewValidatorA, AsyncViewValidatorA, ViewValidatorB, AsyncViewValidatorB,
 ViewValidatorC, AsyncViewValidatorC, ValueAccessorA, ValueAccessorB);
  fixture.detectChanges();
  return fixture;
}it('should clean up valid  fixture.detectChanges();  const newForm = new FormGroup({login: new FormControl('NEW')});
  const oldForm = fixture.componentInstance.form;  // Update `form` input with a new value.
  fixture.componentInstance.form = newForm;  const asyncValidatorSpy = validatorSpyOn(AsyncViewValidatorA);  // Calling `setValue` for the OLD form should NOT trigger validator calls.
  oldForm.setValue({login: 'SOME-OLD-VALUE'});
  expect(validatorSpy).not  newForm.setValue({login: 'SOME-NEW-VALUE'});
  expectValidatorsToBeCalled(validatorSpy, asyncValida  const fixture = initTest(FormControlWithValidators, ViewValidatorA, AsyncViewValidatorA);
  fixture.detectChanges();  const newControl = new FormControl('NEW')!;
  const oldControl = fixtu  fixture.componentInstance.form.removeControl('login');
  fixture.componentInstance.form.addControl('login', n  asyncValidatorSpy.calls.reset();  // Calling `setValue` for the OLD control should NOT trigger validator calls.
  oldControl.setValue('SOME-OLD-VALUE');
  expect(validatorSpy).not.toHaveBeenCalled();
  expect(asyncValidatorSpy  expectValidatorsToBeCalled(validatorSpy, asyncValidatorSpy, {ctx: newControl, count: 1});
});it('should keep control in pending state if async validator never emits', fakeAsync(() => {
conexpect(control.status).toBe('PENDING');control.setValue('SOME-NEW-VALUE');
tick();// Since validator never emits, we expect a control to be retained in a pending state.
expect(control.status).toBe('PENDING');
expect(control.errors).toBe(null);
it('should call validators defined via `set[Async]Validators` after view init', () => {
  const fixture = initTest(FormControlWithValidators, ViewValidatorA, AsyncViewValidatorA);
  fixture.detectChanges();  const control = fixture.componentInstance.form.get('login')!;  const initialValidatorSpy = validatorSpyOn(ViewValidatorA);
  const initialAsyncValidatorSpy = validatorSpyOn(AsyncViewValidatorA);  initialValidatorSpy.calls.reset();
  initialAsyncValidatorSpy.calls.reset();  control.setValue('VALUE-A');  // Expect initial validators (setup during view creation) to be called.
  expectValidatorsToBeCalled(
 initialValidatorSpy, initialAsyncValidatorSpy, {ctx: control, count: 1});  initialValidatorSpy.calls.reset();
  initialAsyncValidatorSpy  const newAsyncValidatorSpy =
 jasmine.createSpy('newAsyncValidator').and.returnValue(of(null));  // Set new validators to a control that is already used in a view.
  /  control.setAsyncValidators(newAsyncValidatorSpy);  // Update control value to trigger validation.
  control.setValue('VALUE-B');  // Verify that initial (inactive) validators were not called.
  expect(initialValidatorSpy).not.toHaveBeenCalled();
  expect(initialAsyncValidatorSpy).not.toHaveBeenCalled();  // Verify that newly applied validators were executed.
  expectValidatorsToBeCalled(newValidatorSpy, newAsyncValidatorSpy, {ctx: control, count: 1});
});it('should cleanup validators on a control used for multiple `formControlName` directives',const fixture =
initTest(NgForFormControlWithValidators, ViewValidatorA, AsyncViewValidatorA);
fixture.detectChanges();const newControl = new FormControl('b')!;
const oldControl = fixture.componentInstance.form.get('login')!;const validatorSpy = validatorSpyOn(ViewValidatorA);
const asyncValidatorSpy = fixture.componentInstance.form.addControl('login', newControl);
fixture.detectChanges();// Check that validators were called with a new control as a context
// and each validator function was called for each control (so 3 times each).
expectValidatorsToBeCalled(validatorSpy, asyncValidatorSpy, {ctx: oldControl.setValue('SOME-OLD-VALUE');
expect(validatorSpy).not.toHaveBeenCalled();
expect(asyncValidatorSpy).not.toHaveBeenCalled();// Calling `setValue` for the NEW (active) control should trigger validator calls.
newControl.setValue('SOME-NEW-VALUE')fixture.componentInstance.logins = ['a', 'b', 'c', 'd', 'e', 'f'];
fixture.detectChanges();validatorSpy.calls.reset();
asyncValidatorSpy.calls.reset();// Calling `setValue` for the NEW (active) control should trigger validator calls.
newControl.setValue('SOME-NEW-VALUE-2');// CheckexpectValidatorsToBeCalled(validatorSpy, asyncValidatorSpy, {ctx: newControl, count: 6});
it('should cleanup directive-specific callbacks only', () => {
  const fixture = initTest(MultipleFormControls, ViewValidatorA, AsyncViewValidatorA);
  fixture.detectChanges();  const sharedControl = fixture.componentInstance.control;  const validatorSpy = validatorSpyOn(ViewValidatorA);
  const asyncValidatorSpy = validatorSpyOn(AsyncViewVa  // (2 times total).
  expectValidatorsToBeCalled(validatorSpy, asyncValidatorSpy, {ctx: sharedControl, count: 2});  // Replace formA with a new instance. This will trigger destroy operation for the
  // `formControlName` directive that is bound to the `control` FormControl instance.
  const newFormA = new FormGroup({logi  fixture.detectChanges();  validatorSpy.calls.reset();
  asyncValidatorSpy.calls.reset();  // Update control with a new value.
  sharedControl.setValue('d');
  fixture.detectChanges();  // We should still s  expectValidatorsToBeCalled(validatorSpy, asyncValidatorSpy, {ctx: sharedControl, count: 1});
});  // ---------
  // [formControl] *ngIf  const control = new FormControl();
  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  @Component({
selector: 'app',
template: `
 <input *ngIf="visible" type="text" [formControl]="control" cva-a validators-a>
`
  })
  class App {
visible = true;
control = control;  control.setValue('Initial value');
  fixture.detectChanges();  verifySpies(control, {
ownValidators: control,
viewValidators: control,valueChanges: 'Initial value',
  });  // Case 2: hide form control and verify no directive-related callbacks
  // (validators, value accessors) were invoked.
  fixture.componentInstance.visible =  resetSpies(control);  control.setValue('Updated Value');  // Expectation:
  // - FormControlDirective was destroyed and connection to default value accessor and view
  //   validators should also be destroyed.
  verifySpies(control, {ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated Value',
  });  // Case 3: make the form control visible again and veri  fixture.componentInstance.visible = true;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  resetSpies(control);  control.setValue('Updated Value (v2)');  verifySpies(control, {
viewValidators: control,valueAccessor: 'Updated Value (v2)',
valueChanges: 'Updated Value (v2)',
  });
});it('should clean up when FormControlDirective  // ---------
  /  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  @Component({
selector: 'app',
template: `
 <input type="text" [formControl]="control" cva-a validators-a *ngIf="visible">
 <input type="text" [formControl]="control" cva-b>
`
  })visible = true;
control = control;
  }  const fixture = initCleanupTest(App);  // Value accessor for the second <input> without *ngIf.
  const valueAccessorBSpy = spyOn(ValueAccessorB.prototype, 'writeValue  resetSpies(control);  // Case 1: update control value and verify all spies were called.
  control.setValue('Initial value');
  fixture.detectChanges();  expect(valueAccessorBSpy).toHaveBeenCalledWith('Initial value');
  verifySpies(control, {viewValidators: control,
valueAccessor: 'Initial value',
valueChanges: 'Initial value',
  });  // Case 2: hide form control and verify n  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  valueAccessorBSpy.calls.reset();
  resetSpies(control);  control.setValue('Updated Value');  // Expectation:
  // - FormControlDirective was des  // - Since there is a second instance of the FormControlDirective directive present in the
  //   template, we expect to see calls to value accessor B (since it's applied to
  //   that directive instance) and validators applied on a control instance itself (not a
  //   part of a view setup).
  expect(valueAccessorBSpyviewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated Value',});it('should clean up callbacks when FormControlName directive is destroyed', () => {
  // Scenario:
  // ---------
  // [formGroup]
  //   formControlName *ngIf  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  @Component({
selector: 'app',
template: `
 <div [formGroup]="group">   <input type="text" formControlName="control" cva-b>
 </div>
`
  })
  class App {group = new FormGroup({control});
  }  const fixture = initCleanupTest(App);  // DefaultValueAccessor will be used for the second <input> where no custom CVA is defined.
  const valueAccessorBSpy = spyOn(ValueAccessorB.prototype, 'writeValue');  // Reset all spies.
  valueAccessorBSpy.calls.reset();
  resetSpies(control);  // Case 1:   fixture.detectChanges();  expect(valueAccessorBSpy).toHaveBeenCalledWith('Initial value');
  verifySpies(control, {
viewValidators: control,
ownValidators: control,
val  });  // Case 2: hide form control and verify no directive-related callbacks
  // (validators, value accessors) were invoked.
  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  valueAccessorBSpy.calls.reset();
  resetSpies(control);  control.setValue('Updated value');  // Expectation:
  // - `FormControlName` was destroyed and connection to the value accessor A and
  //   validators should also be destroyed.
  // - Since there is a second instance of `FormControlName` directive present in the
  //   template, we expect to see calls to the value accessor B (since it's applied to
  //   that directive instance) and validators applied on a control instance itself (not a
  //   part of a view setup).
  expect(valueAccessorBSpy).toHaveBeenCalledWith('Updated value');
  verifySpies(control, {ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated value',
  });
});it('should clean up callbacks when FormGroupDirective is destroyed', () => {
  // Scenario:
  // ---------
  // [formGroup] *ngIf  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  const group = new FormGroup({control});
  addOwnValidatorsAndAttac  });  @Component({
selector: 'app',
template: `
 <ng-container *ngIf="visible">
   <div [formGroup]="group" validators-b>
 <i </ng-container>
`
  })
  class App {
visible = true;
control = control;  }  const fixture = initCleanupTest(App);  resetSpies(group, control);  // Case 1: update control value and verify that all spies were called.
  control.viewValidators: control,valueAccessor: 'Initial value',
valueChanges: 'Initial value',
  });
  verifySpownValidators: group,  });
  // Case 2: hide form group and verify that no directive-related callbacks
  // (validators, value accessors) are invoked when we set control value later.
  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  resetSpies(group, control);  control.setValue('Updated value');  // Expectation:
  // - `FormGroupDirective` and `Fo  // - Own validators directly attached to FormGroup and FormControl should still be invoked.
  verifySpies(control, {
viewValidators: SHOULD_NOT_BE_CALLED,valueAccessor: SHOULD_NOT_BE_CALLED,
val  verifySpies(group, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: group,
valueChanges: {control: 'Updated value'},
  });  // Case 3: make the form control visible again and verify all callbacks are correctly
  // attached and invoked.
  fixture.componentInstance.visible = true;
  fixtuviewValidators: control,valueAccessor: 'Updated value (v2)',
valueChanges: 'Updated value (v2)',
  });viewValidators: group,
ownVali  });  // Scenario:
  // ---------
  // [f  addOwnValidatorsAndAttachSpies(valueAccessor: ValueAccessorA,
  });  const group = new FormGroup({control});
  addOwnValidatorsAndAttachSpies(group, {
viewValidators: [ViewValidatorB, AsyncViewValidatorB],
  });  @Component({
selector: 'app',
template: `
 <div [ </div>  })
  class App {
visible = true;group = group;  control.setValue('Initial value');
  fixture.detectChanges();  verifySpies(control, {
viewValidavalueAccessor: 'Initial value',  });
  verifySpies(group, {
viewValidators: group,
ownValidators: group,
valueChanges: {control: 'Initial value'},
  });
  // Case 2: hide form group and verify that no directive-related callbacks
  // (validators, value accessors) are invoked when we set control value later.
  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  reset  //   validators should also be destroyed.
  // - Own validators directly attached to FormGroup and FormControl should still be invoked.
  // - `FormGroupDirective` was *not* destroyed, so all view validators should be invoked.
  verifySpies(control, {ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated value',
  });
  verifySpies(group, {ownValidators: group,
valueChanges: {control: 'Updated value});it('sho  // ---------
  // [formGroup]
  //   [formControl] *ngFor  const contviewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  const group = new FormGroup(viewValidaselector: 'app',
template: `
 <div [formGroup]="group" validators-b *ngIf="visible">
   <ng-container *ngFor="let login of logins">
 <input type="radio" [value]="login </div>
`
  })visible = true;
control = control;logins = [  control.setValue('Initial value');
  fixture.detectChanges();  verifySpies(control, {
viewValidatorCallCount: 3,  // since *ngFor produces 3 [formControl]s
valueAccessorCallCount: 3,  // sincviewValidavalueAccessor: 'Initial value',
valueChanges: 'Initial value',
  });
  verifySpies(group, {
viewValidators: group,valueChanges: {control: 'Initial value'},
  });  // Case 2: update the list of logins which would result in cleanups for no longer needed
  // (thus destroyed) directives.
  fixture.componentInstance.logins = ['c', 'd'];
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  resetSpies(group, control);  control.setValue('Updated value');  verifySpies(control, {
viewValidatorCallCount: 2,  // since now we have 2 items produced by *ngFor
valueAccesviewValidators: control,
ownValidators: control,
valueAccesso  });
  verifySpies(group, {
viewValidators: group,
ownValidators: group,  });  // Case 3: hide form group and verify that no directive-related callbacks
  // (validators, value accessors) are invoked when we set control value later.
  fixture.componentInsta  resetSpies(group, control);  control.setValue('Updated value (v2)');  verifySpies(control, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccesso  });
  verifySpies(group, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: group,
valueChanges: {control: 'Updated value (v2)'},
  });
});it('should clean up when FormArrayName is destroyed (but parent FormGroup exists)', () => {
  // Scenario:
  // ---------
  // [formGroup]
  //   formArrayName
  //     formControlName *ngIf  const control = new FormControl();
  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
 viewValidators: [ViewValidatorB, AsyncViewValidatorB],
  });  const group = new FormGroup({arr});
  addOwnValidatorsAndAtt  });  @Component({
selector: 'app', <div [formGroup]="group" validators-c>
   <ng-container formArrayName="arr" validators-b>
 <input *ngIf="visible" type="text" formControlName="0" cva-a validators-a>
 `
  })
  class App {
v  }  const fixture = initCleanupTest(App);  resetSpies(group, arr, control);  // Case 1: update control value and verify that all spies were called.
  control.setValue('Initial value');
  fixture.detectChanges();  verifySpies(control, {
viewValidators: control,
ownValidators: control,
valueAccessor: 'Initial value',
valueChanges: 'Initial value',
  });
  verifySpies(arr, {
viewValidators: arr,
ownValidators: arr,
valueChanges: ['Initial value'],
  });
  verifySpies(group, {
viewValidators: group,
ownValidators: group,
valueChanges: {arr: ['Initial value']},
  });
  // Case 2: hide form group and verify that no directive-related callbacks
  // (validators, value accessors) are invoked when we set control value later.
    resetSpies(group, arr, control);  control.setValue('Updated value');  // Expectation:
  // - `FormControlDirective` was destroyed, so connection to value accessor and view
  //   validators should also be destroyed.
  // - Own validators directly attached to FormGroup, FormArray and FormControl should still
  //   be invoked.  verifySpies(control, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated value',
  });viewValidators: arr,
ownValidators: arr,
valueChanges: ['Updated value'],  verifySpies(group, {
viewValidators: group,
ownValidators: group,  });
});it('should clean up when FormArrayName is destroyed (but parent FormGroup exists)', () => {
  // Scenario:
  // ---------
  // [formGroup]
  //   formArrayName *ngIf  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  const arr = new FormArray([control]);
  addOwnValidatorsAndAttachSpies(arr, {
viewV  addOwnValidatorsAndAttachSpies(group, {
viewValidators: [ViewValidatorC, AsyncViewValidatorC],
  });  @Component({
selector: 'app',
template: `
 <div [formGroup]="group" validators-c>
   <ng-container *ngIf="visible" formArrayName="arr" validators-b>
 <input type="text" formControlName="0" cva-a validators-a>
   </ng-container>
 </div>
`
  })
  class App {
v  }  const fixture = initCleanupTest(App);  resetSpies(group, arr, control);  // Case 1: update control value and verify that all spies were called.
  control.setValue('Initial value');
  fixture.detectChanges(ownValidators: control,
valueAccessor: 'Initial value',  });
  verifySpies(arr, {
viewValidators: arr,
o  });
  verifySpies(group, {
viewValidators: group,
o  });
  // Case 2: hide form group and verify that no directive-related callbacks
  // (validators, value accessors) are invoked when we set control value later.
  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  resetSpies(group, arr, control);  control.setValue('Updated value');  // Expectation:
  // - `FormArrayName` was destroyed, so connection to view validators should be destroyed.
  // - Own validators directly attached to FormGroup, FormArray and FormControl should still
  //   be invoked.
  verifySpies(control, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated value',
  });
  verifySpies(arr, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: arr,
valueChanges: ['Updated value'],
  });
  ownValidators: group,
valueChanges: {arr: ['Updated value']},
  });  // Case 3: make the form array control available again and verify all callbacks are
  // correctly attached and invoked.
  fixture.componentInstance.visib  resetSpies(group, arr, control);  control.setValue('Updated value (v2)');  verifySpies(control, {
viewValidators: control,
ownValidators: control,
valueAccessor: 'Updated value (v2)',
valueChanges: 'Updated value (v2)',
  });viewValidators: arr,
ownValidators: arr,
valueChanges: ['Updated value (v2  verifySpies(group, {
viewValidators: group,
ownValidators: group,  });
});it('should clean up all child controls when FormGroup is destroyed', () => {
  // Scenario:
  // ---------
  // [formGroup] *ngIf
  //   formArrayName  addOwnValidatorsAndAttachSpies(control, {
viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,
  });  const arr = new FormArray([control]);
  addOwnValidatorsAndAttachSpies(arr, {
viewValidators: [ViewValidatorB, AsyncViewValidatorB],
  }viewValidators: [ViewValidatorC, AsyncViewValidatorC],
  });  @Component({
selector: 'app',
template: `
 <div [formGroup]="group" validators-c *ngIf="visible">
   <ng-container formArrayName="arr" validators-b>
 <input type="text" formControlName="0" cva-a validators-a>
   </ng-container>
 </div>
`
  })
  class App {group = group;
  }  const fixture = initCleanupTest(App);  r  fixture.detectChanges();  verifySpies(control, {
viewValidators: control,
ownValidators: control,valueChanges: 'Initial value',
  });
  verifySpies(arr, {
viewValidators: arr,
ownValidators: arr,  });
  verifySpies(group, {ownValidators: group,
valueChanges: {arr: ['Initial value']},
  });  // (validators, value accessors) are invoked when we set control value later.
  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  resetSpies(group, arr, control);  control.setValue('Updated value');  // Expectation:
  // - `FormArrayName` was destroyed, so connection to view validators should be destroyed.
  // - Own validators directly attached to FormGroup, FormArray and FormControl should still
  //   be invoked.viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated value',
  });
  vownValidators: arr,
valueChanges: ['Updated value'],
  });
  verifySpies(group, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: group,
valueChanges: {arr: ['Upd  // attached and invoked.
  fixture.componentInstance.visible = true;  resetSpies(group, arr, control);  control.setValue('Updated value (v2)');  verifySpies(control, {
viewValidators: control,
ownValidators: control,
valueAccessor: 'Updated value (v2)',  });
  verifySpies(arr, {
viewValidators: arr,
ownValidators: arr,
valueChanges: ['Updated value (v2)'],  verifySpies(group, {
viewValidators: group,valueChanges: {arr: ['Updated value (v2)']},
  });
});it('should clean up all child controls (with *ngFor) when FormArrayName is des  // ---------
  // [formGroup]
  //   formArrayName *ngIf
  //     formControlName *ngFor  const controlA = new FormControl('A');
  addOwnValidatorsAndAttachSpies(controlA, {
vie  });  const controlB = new FormControl('B');
  // Note: since ControlA and ControlB share the same set of validators and value accessor, we
  // add spies just ones while configuring ControlA (it's not possible to add spies multiple
  // times).
  addOwnValidatorsAndAttachSpies(controlB, {});  const arr = new FormArray([controlA, controlB]);
  addOwnValidatorsAndAtta  });  const group = new FormGroup({arr});
  addOwnValidatorsAndAttachSpies(group, {  });  @Component({
selector: 'app',
template: `   <ng-container formArrayName="arr" validators-b *ngIf="visible">
 <ng-container *ngFor="let i of ids">
   <input type="text" [formControlName]="i" cva-a validators-a>
 </ng-container>
   </ng-container>`
  })
  class App {
visible = true;
group = group;
ids  controlA.setValue('Updated A');
  fixture.detectChanges();  verifySpies(controlA, {
viewValidators: controlA,
ownValidators: controlA,
valueAccessor: 'Updated A',
valueChanges: 'Updated A'  verifySpies(controlB, {
// ControlB is a sibling to ControlA, so updaownValidators: SHOULD_NOT_BE_CALLED,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: SHOULD_NOT_BE_CALLED,  verifySpies(arr, {
viewValidators: arr,
ownValidators: arr,
valueChanges: ['Updated A', 'B'],
  });viewValidators: group,
ownValidators: group,
valueChanges: {arr: ['Updated A', 'B']},
  });  // Case 2: remove ControlA from the view by updating the list of ids.
  // Verify that ControlA is detached from the view, but ControlB still w  fixture.detectChanges();  // Reset all spies again, prepare for next check.
  resetSpies(group, arr, controlA, controlB);  controlA.setValue('Updated A (v2)');  verifySpies(controlA, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: controlA,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated A (v2)',
  });viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: SHOULD_NOT_BE_CALLED,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: SHOULD_NOT_BE_CALLED,
  });
  vownValidators: arr,
valueChanges: ['Updated A (v2)', 'B'],
  });
  verifySpies(group, {
viewValidators: group,
ownValidators: group,
valueChanges: {arr: ['Updated A (v2)', 'B']},
  });  // Case 3: hide fo  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset all spie  // - `FormArrayName` was destroyed, so connection to view validators should be destroyed.
  // - Own validators directly attached to FormGroup, FormArray and FormControl should still
  //   be invoked.
  verifySpies(controlA, {
viewValidators: SHOULD_NOT_BE_CALLED,valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: SHOULD_NOT_BE_CALLED,
  });
  verifySpies(controlB, {
viewValidators: SHOULD_NOT_BE_CALLED,valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated B',
  });
  verifySpies(arr, {
viewValidators: SHOULD_NOT_BE_CALLED,valueChanges: ['Updated A (v2)', 'Updated B'],
  });
  verifySpies(group, {
viewValidators: group,
ownValidators: group,
val});it('should clean up all child controls when FormGroupName is destroyed', () => {
  // Scenario:
  // ---------
  // [formGroup]
  //   formGroupName *ngIf
  //     formControlName viewValidators: [ViewValidatorA, AsyncViewValidatorA],
valueAccessor: ValueAccessorA,  addOwnValidatorsAndAttachSpies(group, {
viewValidators: [ViewValidatorB, AsyncViewValidatorB],
  });  const root = new FormGroup({group});viewValidators: [ViewValidatorC, AsyncViewValidatorC],
  });  @Component({
selector: 'app',
template: `
 <div [formGroup]="root" validators-c> <input type="text" formControlName="control" cva-a validators-a>
   </ng-container>
 </div>
`
  })
  croot = root;
  }  const fixture = initCleanupTest(App);  resetSpies(root, group, control);  // Case 1: update control value and verify that all spies were called.
  control.setValue('Initial value');
  fixture.detectChanges();  verifySpies(control, {ownValidators: control,
valueAccessor: 'Initial value',
valueChanges: 'Initial value',
  });viewValidators: group,
ownValidators: group,  });
  verifySpies(root, {
viewValidators: root,
ownValidators: root,
valueChanges: {group: {control: 'Initial value'}},
  }  // (validators, value accessors) are invoked when we set control value later.
  fixture.componentInstance.visible = false;
  fixture.detectChanges();  // Reset  // - `FormGroupName` was destroyed, so connection to view validators should be destroyed.
  // - Own validators directly attached to FormGroups and FormControl should still
  //   be invoked.viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccessor: SHOULD_NOT  });
  verifySpies(group, {ownValidators: group,
valueChanges: {control: 'Updated value'},
  });viewValidators: root,
ownValidators: root,
valueChanges: {group: {control: 'Updated value'}},
  });
});it('should clean up all child controls when F  // ---------
  // [formGroup] *ngIf
  //   formGroupName
  //     formControlName  const control = new FormControl();
  addOwnValidatorsAndAttachSpies(control, {valueAccessor: ValueAccessorA,
  });  const group = new FormGroup({control});
  addOwnValidatorsAndAttachSpies(group, {
viewValidators: [ViewValidatorB, AsyncViewValidatorB],
  }viewValidators: [ViewValidatorC, AsyncViewValidatorC],
  });  @Component({
selector: 'app',
template: `
 <div [formGroup]="root" validators-c *ngIf="visible">
   <ng-container formGroupName="group" validators-b>
 <input type="text" formControlName="control" cva-a validators-a>
   </ng-container>`
  })visible = true;
root = root;
  }  const fixture = initCleanupTest(App);  resetSpies(root, group, control);  fixture.detectChanges();  verifySpies(control, {
viewValidators: control,
ownValidators: control,
valueAccessor: 'Initial value',
valueChanges: 'Initial value',  verifySpies(group, {
viewValidators: group,
ownValidators: group,
valueChanges: {control: 'Initial value'},
  });viewValidators: root,
ownValidators: root,
valueChanges: {group: {control: 'Initial value'}},
  });
  // Case 2: hide form group and verify that no directive-related callbacks
  // (validators, value accessors) are invoked when we set control value later.
  fix  resetSpies(root, group, control);  control.setValue('Updated value');  // Expectation:
  // - `FormGroup` was destroyed, so connection to view validators should be destroyed.
  // - Own validators directly attached to FormGroups and FormControl should still
  //   be invoked.viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: control,
valueAccessor: SHOULD_NOT_BE_CALLED,
valueChanges: 'Updated value',
  });
  verifySpies(group, {
viewValidators: SHOULD_NOT_BE_CALLED,
ownValidators: group,  });
  verifySpies(root, {
vvalueChanges: {group: {control: 'Updated value'}},
  });
});// See https://github.com/angular/angular/issues/40521.
it(selector: 'no-cva-compo',
template: `
 <form [formGroup]="form">
   <div formControlName="control"></div>
 </form>
`
  })
  class NoCVAComponent {
form = new FormGroup({control: new FormControl()});
  }  const fixture = initTestfixture.detectChanges();
  })
   // for not fully initialized controls.
  expect(() => {
fixture.destroy();
  }    });
  });
}/**
 * Creates an async validator using a checker function, a timeout and the error to emit in case of
 * validation failure
 *
 * @param checker A function to decide whether the validator will resolve with success or failure
 * @param timeout When the validation will resolve
 * @param error The error message to be emitted in case of validation failure
 * * case of validation failure
 */
function asyncValidator(
       }) {
  return (c: AbstractContr    const promise = new Promise<any>(res => {
resolve = res;    const res = checker(c) ? null : error;
    setTimeout(() => resol  };
}function uniqLoginAsyncValidator(expectedValue: string, timeout: number = 0) {
  return asyncValidator(c => c.value === expectedValue, timeout, {'uniqLogin': true});
}function observableValidator(resultArr: number[]): AsyncValidatorFn {
  return (c: AbstractControl) => {
    return timer(100).pipe(tap((resp: any) => resultArr.push(resp)));
  };  return c.controls['login'].value == '' ? {'loginIsEmpty': true} : null;
}@Directive({
  selector: '[login-is-empty-validator]',})
class LoginIsEmptyValidator {
}@D  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => UniqLoginValidator), multi: true}
  ]
})
class UniqLoginValidator implements AsyncValidator {
  @Input('uniq-login-validator') expected: any;  validate(c: AbstractControl) {
    return uniqLoginAsyncValidator(this.expected)(c);
  }
}@Component({selector: 'form-control-comp'  control!: FormControl;
}@Component({
  selector: 'form-group-comp',
  t<input type="text" formControlName="login">
    </form>`
})
class FormGroupComp {
  control!: FormControl;
  form!: FormGroup;
  event!: Event;
}@Component({
  selector: 'nested-form-group-name-comp',
  template: `
    <form [formGroup]="form">  <input formControlName="login">
  <input formControlName="password">
</div>
<in})
class NestedFormGroupNameComp {
  form!: FormGroup;
}@Component({
  selector: 'form-array-comp',
  template: `
    <form [formGroup]="form">
<div formArrayName="cities">
  <div *ngFor="let city of cityArray.controls; let i=index">
<input [formControlName]="i">
  </div>
</div>
     </form>`class FormArrayComp {
  form!: FormGroup;
  cityArray!: FormArray;
}@C  template: `
    <form [formGroup]="form">
<div formArrayName="arr">
  <input formControlName="0">
</div>
    </form>
  `
})
class NestedFormArrayNameComp {
  form!: FormGroup;
}@Component({  template: `
     <div [formGroup]="form">
<div formArrayName="cities">
  <<input formControlName="state">
  </div>
</div>
     </div>`
})
class FormArrayNestedGroup {
  form!: FormGroup;
  cityArray!: FormArray;
}@Component({
  selector: 'form-group-ng-model',
  template: `
  <form [formGroup]="form">
    <input type="text" formControlName="lo   </form>`
})
class FormGroupNgModel {
  f  password!: string;
}@Component({
  selector: 'form-control-ng-model',
  template: `
    <input type="text" [formControl]="control" [(ngModel)]="login">
    <input type="text" [formControl]="passw})
class FormControlNgModel {
  control!: FormControl;  passwordControl!: FormControl;
  password!: string;
}@Component({
  s    <div [formGroup]="form" login-is-empty-validator>
<input type="text" formControlName="login" required>
<input type="text" formControlName="min" minlength="3">
<input type="text" formControlName="max" maxlength="3">
<input type="text" formControlName="pattern" pattern=".{3,}">
   </div>`class LoginIsEmptyWrapper {
  form!: FormGroup;
}@Component({
  selector: 'validation-bindings-form',
  template: `<input name="required" type="text" formControlName="login" [required]="required">
<input name="minlength" type="text" formControlName="min" [minlength]="minLen">
<input name="maxlength" type="text" formControlName="max" [maxlength]="maxLen">
<in})
class ValidationBindingsForm {
  form!: FormGroup;
  required!: boolean;
  minLen!: number;
  maxLen!: number;}@Component({
  selector: 'form-control-checkbox-validator',
  template: `<input type="checkbox" [formControl]="control">`
})
class FormControlCheckboxRequiredValidator {}@Component({
  s  <div [formGroup]="form">
    <input type="text" formControlName="login" uniq-login-validator="expected">
  </div>`
})
class UniqLoginWrapper {
  form!: FormGroup;
}@Component({
  selector: 'form-group-with-validators',
  template: `
    <div [formGroup]="form" validators-a>
<input type="text" formControlName="login">
    </div>
  `
})  form = new FormGroup({login: new FormControl('INITIAL')});
}@Component({
  selector: 'form-control-with-validators',
  t<input type="text" formControlName="login">
    </div>
  `
})
class FormControlWithAsyncValidatorFn {
  control = new FormControl('INITIAL');
  form = new FormGroup({login: this.control});  constructor() {
    this.control.setAsyncValidators(() => {
return NEVER.pipe(map((_: any) => ({timeoutError: true})));
    });
  }
}@Component({
  selector: 'form-control-with-validators',
  template: `<input type="text" formControlName="login" validators-a>
    </div>
  `
})  form: FormGroup = new FormGroup({login: new FormControl('INITIAL')});
}@Component({
  selector: 'ngfor-form-controls-with-validators',
  template: `
    <div [formGroup]="formA">
<input type="radio" formControlName="login" validators-a>
    </div>
    <div [formGroup]="formB">
<input type="text" formControlName="login" validators-a id="login">
    </div>
  `class MultipleFormControls {
  control = new FormControl('a');
  formA = new FormGroup({login: this.control});
  formB  selector: 'ngfor-form-controls-with-validators',
  template: `
    <div [formGroup]="form">
<ng-container *ngFor="let login of logins">
  <input type="radio" formControlName="login" [value]="login" validators-a>
</ng-container>
    </div>})  form: FormGroup = new FormGroup({login: new FormControl('a')});
  logins = ['a', 'b', 'c'];
}@Component({
  selector: 'min-max-form-control-name',
  template: `<input type="number" formControlName="pin" [max]="max" [min]="min">
   </div>`
})
class MinMaxFormControlNameComp {
  control!: FormControl;
  form!: FormGroup;
  min: number|string = 1;}@Component({
  selector: 'min-max-form-control',
  template: `
    <div [formGroup]="form">   </div>`
})
class MinMaxFormControlComp {
  control!: FormControl;
  form!: FormGroup;
  min: }@Component({
  template: `
    <dialog open>
<form #form method="dialog" [formGroup]="formGroup">
  <button>Submit</button>    </dialog>
  `
})  @ViewChild('form') form!: ElementRef<HTMLFormEle}@Component({
  selector: 'radio-form',
  template: `    <input type="radio" formControlName="choice" value="one" [attr.disabled]="true"> One
    <input type="radio" formControlName="choice" value="two"> Two
  </form>
  `,
})
export class RadioForm {    choice: new FormControl('one'),
  });
}
