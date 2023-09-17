import {Component} from '@angular/core';        {/if}
      {/if}
    {/if}
  `,
})
export class MyApp {
  value = () => 1;
  // TODO(crisbeto): remove this once template type checking is fully implemented.
  root: any;
  inner: any;
  innermost: any;
}
