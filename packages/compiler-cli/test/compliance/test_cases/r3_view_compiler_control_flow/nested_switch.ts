import {Component} from '@angular/core';   {:case 0} nested case 0
   {:case 1} nested case 1
   {:case 2} nested case 2
 {/switch}
        {:case 2} case 2
      {/switch}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  value = () => 1;
  nestedValue = () => 2;
}
