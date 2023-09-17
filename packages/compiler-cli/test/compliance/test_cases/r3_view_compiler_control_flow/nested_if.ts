import {Component} from '@angular/core'; {#if innerVal === 0}
   inner zero
   {:else if innerVal === 1} inner one
   {:else if innerVal === 2} inner two
   {:else} inner three
 {/if}
        {:else} inner three
      {/if}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  val = 1;
  innerVal = 2;
}
