/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */  override onUnstable: EventEmitter<any>;  /** @internal */    super({enableLongStackTrace: false});    this.onStable = new EventEmitter(false);
   }
}{    let testability: Testability;    let ngZone: MockNgZone;    beforeEach(waitForAsync(() => {      testability = new Testability(ngZone, new TestabilityRegistry(), new NoopGetTestability());
       // get leaked between tests. In real scenarios this is not a problem, since
       setTestabilityGetter(null! as GetT    describe('Pending counttestability.whenStable(exec});      it('should not fire whenstable call        expect(execute).not.toHaveBeenCalled();
 });      it('should fire whenstable callbacks when pending drops to 0', waitForAsync(() => {
t  expect(execute).not.toHaveBeenCalled()expect(execute).toHaveBeenCalled();
  });ync(() =>testability.whenStable(execute);
testability.decreasePending  });
});      it('should fire whenstable callbacks with didWork when pending drops to 0',
ync(() => {
t  expect(tasks[0].data).toBeTruthy();
   testability.whenStable(execute, 200);   const id = ngZone.run(() => setTimeout(() => {}, 1000));
  testability.whenStable(execute, 500);  // fake  expect(execute).toHaveBeenCalled();
}));        it('calls the d  ngZone.stable();
  tick();
  expect(execute.calls.count()).toEqual(1);
}  e  tick();  expect(execute).not.toHaveBeenCalled();
}));ngZone.unstable();
ngZone.stable();
texpect(execute).not.toHaveBeenCalled();etestability.increasePendingRequestCount();
testability.whenStable(execute);tick();ngZone.sttestability.increasePendingRequestCount();
testngZone.stable();tick();testability.whenStable(execute);tick();
ngZone.stable();tick();
expect(execute).toHaveBeenCalledWith(true);
tes      // effect of defining the testability getter globally to a specified value.
      // This call resets that r        expect(registry.getTestability('testability1')).toEqual(testability1);
           r        expect(registry.getAllTestabilities().length).toEqual(0);
      });